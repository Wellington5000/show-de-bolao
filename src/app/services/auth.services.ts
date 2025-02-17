import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ApiService} from "./api.service";
import {UserModel} from "../models/user.model";
import {jwtDecode} from "jwt-decode";
import {LoginRequest, LoginResponse} from "../models/login.model";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenStorageKey = 'auth_tokens';
  private readonly tokenSubject = new BehaviorSubject<LoginResponse | null>(this.getTokensFromStorage());

  constructor(private apiService: ApiService) {
  }

  /**
   * Cria uma conta para o usuário e salva os tokens no storage.
   */
  createAccount(credentials: UserModel): Observable<void> {
    return this.apiService.post<UserModel>('register', credentials).pipe(
      tap(() => void 1),
      map(() => void 0)
    );
  }

  initializeTokens(): void {
    const storedTokens = this.getTokensFromStorage();
    this.tokenSubject.next(storedTokens);
  }

  me(): Observable<UserModel> {
    return this.apiService.get<UserModel>('me').pipe(
      tap((user) => void 1),
      map((user) => user)
    );
  }

  addSurname(surname: string): Observable<void> {
    return this.apiService.patch<UserModel>('me', {surname}).pipe(
      tap(() => void 1),
      map(() => void 0)
    );
  }

  /**
   * Realiza o login do usuário e salva os tokens no storage.
   */
  login(credentials: LoginRequest): Observable<void> {
    return this.apiService.post<LoginResponse>('login', credentials).pipe(
      tap((tokens) => {
        this.saveTokens(tokens);
        this.tokenSubject.next(tokens);
      }),
      map(() => void 0)
    );
  }

  /**
   * Faz o logout do usuário, removendo os tokens do storage.
   */
  logout(): Observable<void> {
    return this.apiService.post('logout', {
      refresh: this.getTokensFromStorage()?.refresh,
    }).pipe(
      tap(() => {
        this.tokenSubject.next(null);
        this.clearTokens();
      }),
      map(() => void 0)
    );
  }

  /**
   * Renova o token de acesso utilizando o refresh token.
   */
  refreshAccessToken(): Observable<void> {
    const tokens = this.getTokensFromStorage();
    if (!tokens || !tokens.refresh) {
      return throwError(() => new Error('Nenhum refresh token disponível.'));
    }

    return this.apiService.post<LoginResponse>('refresh', {refresh: tokens.refresh}).pipe(
      tap((newTokens) => {
        this.saveTokens(newTokens);
        this.tokenSubject.next(newTokens);
      }),
      map(() => void 0)
    );
  }

  /**
   * Verifica se o usuário está autenticado.
   */
  isAuthenticated(): boolean {
    const tokens = this.getTokensFromStorage();
    if (!tokens?.access || !tokens?.refresh) {
      return false;
    }
    const accessTokenExp = this.getTokenExpiration(tokens.access);
    const refreshTokenExp = this.getTokenExpiration(tokens.refresh);

    const currentTime = Math.floor(Date.now() / 1000);
    if (accessTokenExp < currentTime && refreshTokenExp >= currentTime) {
      this.refreshAccessToken().subscribe();
      this.logout();
      return false;
    }


    return accessTokenExp >= currentTime;
  }

  private getTokenExpiration(token: string): number {
    try {
      const decoded: any = jwtDecode(token);
      return decoded.exp;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return 0;
    }
  }

  /**
   * Retorna o token de acesso atual.
   */
  getAccessToken(): string | null {
    return this.getTokensFromStorage()?.access || null;
  }

  /**
   * Retorna o BehaviorSubject para monitorar alterações nos tokens.
   */
  getTokenChanges(): Observable<LoginResponse | null> {
    return this.tokenSubject.asObservable();
  }

  /**
   * Salva os tokens no storage local.
   */
  private saveTokens(tokens: LoginResponse): void {
    localStorage.setItem(this.tokenStorageKey, JSON.stringify(tokens));
  }

  /**
   * Obtém os tokens do storage local.
   */
  private getTokensFromStorage(): LoginResponse | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem(this.tokenStorageKey);
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  }

  /**
   * Obtém os tokens atuais.
   */
  private getTokens(): LoginResponse | null {
    return this.tokenSubject.getValue();
  }

  /**
   * Limpa os tokens do storage local.
   */
  private clearTokens(): void {
    localStorage.removeItem(this.tokenStorageKey);
  }
}
