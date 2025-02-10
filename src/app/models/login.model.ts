export interface LoginRequest {
  login?: string | null;
  password?: string | null;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}
