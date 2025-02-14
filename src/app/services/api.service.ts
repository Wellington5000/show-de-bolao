import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) {
  }

  /**
   * Realiza uma requisição GET.
   * @param endpoint Endpoint relativo (exemplo: 'users')
   * @param params Filtros ou parâmetros da requisição
   * @param responseType Tipo da resposta esperada
   */
  get<T>(endpoint: string, params?: Record<string, any>, responseType: 'json' = 'json'): Observable<T> {
    const httpParams = this.buildHttpParams(params);
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {params: httpParams, responseType});
  }

  /**
   * Realiza uma requisição POST.
   * @param endpoint Endpoint relativo (exemplo: 'users')
   * @param body Corpo da requisição
   */
  post<T, B = any>(endpoint: string, body: B): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  /**
   * Realiza uma requisição PUT.
   * @param endpoint Endpoint relativo (exemplo: 'users/1')
   * @param body Corpo da requisição
   */
  put<T, B = any>(endpoint: string, body: B): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  patch<T, B = any>(endpoint: string, body: Partial<B>): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  /**
   * Realiza uma requisição DELETE.
   * @param endpoint Endpoint relativo (exemplo: 'users/1')
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
  }

  /**
   * Constrói os parâmetros da requisição com base no objeto fornecido.
   * @param params Objeto contendo os parâmetros
   */
  private buildHttpParams(params?: Record<string, any>): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          httpParams = httpParams.append(key, value.toString());
        }
      });
    }
    return httpParams;
  }
}
