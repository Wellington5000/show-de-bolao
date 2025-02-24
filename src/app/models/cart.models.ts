import {PaginateModels} from "./paginate.models";

export interface Cart {
  id: number;
  amount: number;
  total: string;
  card_value: number;
  is_finish: boolean;
  is_winner: boolean;
  is_paid: boolean;
  created_at: string;
  updated_at: string;
  user: number;
  card: number;
}

export interface CartPagination extends PaginateModels<Cart> {}
