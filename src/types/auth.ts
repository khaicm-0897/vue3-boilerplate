export type Authentication = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
};

export type LoginResponse = Authentication & {
  userId: string;
};
