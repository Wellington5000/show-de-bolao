export interface UserModel {
  id?: number;
  name?: string | null;
  email?: string | null;
  email_verified_at?: string;
  surname?: string | null;
  signature?: SignatureModel;
  password?: string | null;
  phone_number?: string | null;
  remember_token?: string;
  uuid?: string;
  provider?: string;
  provider_id?: string;
  provider_token?: string;
  notification_token?: string;
  guru_user_id?: string;
  created_at?: string;
  updated_at?: string;
  avatar?: string;
}

export interface SignatureModel {
  id?: number;
  plan?: string;
  data_encerramento?: string;
  prazo_beneficios?: string;
  situacao?: string;
  motivo?: string | null;
  created_at?: string;
  updated_at?: string;
  plano?: number;
  user?: number;
}
