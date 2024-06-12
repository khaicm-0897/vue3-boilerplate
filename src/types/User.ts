export interface User {
  id: number;
  name: string;
  email: string;
}

export interface FormLoginState {
  email: string;
  password: string;
  remember: boolean;
}

export type LoginData = Omit<FormLoginState, 'remember'>;

export interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
}
