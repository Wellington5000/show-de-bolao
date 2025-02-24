import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {map, tap} from "rxjs/operators";
import {CartPagination} from "../models/cart.models";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private apiService: ApiService) {
  }

  listCarts(): Observable<CartPagination> {
    return this.apiService.get<CartPagination>('cart').pipe(
      tap((user) => void 1),
      map((user) => user)
    );
  }
}
