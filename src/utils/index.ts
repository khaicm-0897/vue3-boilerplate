import { COOKIE_NAME } from '@/constants';
import Cookies from 'js-cookie';

export const getAccessToken = (): string | null => {
  return Cookies.get(COOKIE_NAME) ?? null;
};
