import { Get, Post, Put } from '@/plugins/axios';
import type { LoginResponse } from '@/types/auth';
import type { ResponseSuccess } from '@/types/common';
import type { LoginData, User } from '@/types/user';

export const getUsers = async (): Promise<User[]> => {
  const response = await Get('/users');

  return response.data;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await Put(`/users/${id}`);

  return response.data;
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await Post<ResponseSuccess<LoginResponse>>(`/users/login`, data);

  return response?.data;
};
