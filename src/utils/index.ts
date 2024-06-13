import { COOKIE_NAME } from '@/constants';
import Cookies from 'js-cookie';

export const getAccessToken = (): string | null => {
  return Cookies.get(COOKIE_NAME) ?? null;
};

export const getRefreshToken = (): string | null => {
  return Cookies.get(COOKIE_NAME) ?? null;
};

export const setAccessToken = (token: string, expiresAt: number) => {
  return Cookies.set(COOKIE_NAME, token, { expires: expiresAt });
};

export const setRefreshToken = (token: string) => {
  return Cookies.set(COOKIE_NAME, token);
};

export const removeAccessToken = () => {
  return Cookies.remove(COOKIE_NAME);
};

export const removeRefreshToken = () => {
  return Cookies.remove(COOKIE_NAME);
};
