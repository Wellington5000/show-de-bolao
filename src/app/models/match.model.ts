import {Game} from "./game.model";

export type Hint = "CASA" | "FORA" | "EMPATE" | null;


export interface Match {
  match: Game;
  hunch: Hint;
}

export interface CardMatch {
  matches: Match[];
  end_date: string; // formato "YYYY-MM-DD"
  end_date_bet: string; // formato ISO 8601 com timezone
  value: string; // valor como string para representar dinheiro
}
