export interface Game {
  id: number;
  team_home_name: string;
  team_away_name: string;
  team_home_logo: string;
  team_away_logo: string;
  championship_name: string;
  championship_popular_name: string;
  championship_year: number;
  score_home: number | null;
  score_away: number | null;
  is_penalties: boolean;
  score_penalties_home: number | null;
  score_penalties_away: number | null;
  slug: string;
  match_date: string; // formato "YYYY-MM-DD"
  match_time: string; // formato "HH:mm:ss"
  match_datetime: string; // formato ISO 8601 com timezone
  result: string | null;
  status: string;
  created_at: string; // formato ISO 8601
  updated_at: string; // formato ISO 8601
  championship: number;
  team_home: number;
  team_away: number;
}
