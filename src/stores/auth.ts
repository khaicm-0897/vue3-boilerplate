import { login } from '@/api/user';
import type { FormLoginState } from '@/types/user';
import { removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken } from '@/utils';
import { defineStore } from 'pinia';

interface State {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number;
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    expiresAt: 0,
  }),
  actions: {
    async login(data: FormLoginState) {
      try {
        this.isLoggedIn = true;
        const response = await login(data);
        this.accessToken = response.accessToken;
        this.refreshToken = response.refreshToken;
        this.expiresAt = response.expiresAt;

        if (this.accessToken && this.accessToken) {
          setAccessToken(this.accessToken, this.expiresAt);
          setRefreshToken(this.refreshToken);
        }
      } catch (error) {
        this.isLoggedIn = false;
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.accessToken = null;
      this.refreshToken = null;

      removeAccessToken();
      removeRefreshToken();
    },
  },
});
