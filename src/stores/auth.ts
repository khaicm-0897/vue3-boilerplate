import { login } from '@/api/user';
import type { FormLoginState } from '@/types/user';
import { removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken } from '@/utils';
import { defineStore } from 'pinia';

interface authState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number;
}

export const useAuthStore = defineStore('auth', {
  state: (): authState => ({
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    expiresAt: 0,
  }),
  actions: {
    async login(data: FormLoginState) {
      try {
        const response = await login(data);
        this.accessToken = response.accessToken;
        this.refreshToken = response.refreshToken;
        this.expiresAt = response.expiresAt;

        if (this.accessToken && this.accessToken) {
          setAccessToken(this.accessToken, this.expiresAt);
          setRefreshToken(this.refreshToken);
        }
        this.isLoggedIn = true;

        return { success: true };
      } catch (error: any) {
        this.isLoggedIn = false;

        return { success: false, message: error.message || 'Login failed' };
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
