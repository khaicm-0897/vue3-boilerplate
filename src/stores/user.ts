import { defineStore } from 'pinia';
import { login } from '@/api/user';
import Cookies from 'js-cookie';
import type { User } from '@/types/user';
import { setAccessToken } from '@/utils';

export const useUserStore = defineStore('user', {
  state: (): User => ({
    user: {},
  }),
  actions: {
    async login(data: { email: string; password: string }) {
      const response = await login(data);
      this.accessToken = response.access_token;
      this.refreshToken = response.refresh_token;

      if (this.accessToken) {
        setAccessToken(this.accessToken);
      }
      Cookies.set('refresh_token', response.refresh_token);
    },
    async logout() {
      this.accessToken = null;
      this.refreshToken = null;

      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
    },
  },
});
