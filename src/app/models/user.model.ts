export interface UserModel {
  id?: number;
  name?: string | null;
  email?: string | null;
  email_verified_at?: string;
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
}
