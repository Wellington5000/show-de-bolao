import {Game} from "./game.model";

export interface Card {
  id: number;
  games: Game[];
  init_date: string; // formato "YYYY-MM-DD"
  end_date: string; // formato "YYYY-MM-DD"
  end_date_bet: string; // formato ISO 8601 com timezone
  value: string; // valor como string para representar dinheiro
  created_at: string; // formato ISO 8601
  updated_at: string; // formato ISO 8601
}
