import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {map, tap} from "rxjs/operators";
import {CardMatch, CardMatchUser} from "../models/match.model";

@Injectable({
  providedIn: 'root',
})
export class BettingService {
  constructor(private apiService: ApiService) {
  }

  listarBetting(): Observable<CardMatch> {
    return this.apiService.get<CardMatch>('betting').pipe(
      tap((user) => void 1),
      map((user) => user)
    );
  }

  criarBetting(card: CardMatchUser): Observable<void> {
    return this.apiService.post<CardMatchUser>('betting', card).pipe(
      tap(() => void 1),
      map(() => void 0)
    );
  }
}
