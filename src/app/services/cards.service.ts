import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService} from "./api.service";
import {map, tap} from "rxjs/operators";
import {Card} from "../models/card.model";

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private apiService: ApiService) {
  }

  currentCard(): Observable<Card> {
    return this.apiService.get<Card>('current-card').pipe(
      tap((user) => void 1),
      map((user) => user)
    );
  }
}
