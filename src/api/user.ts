import { Get, Post, Put } from '@/plugins/axios';
import type { LoginData, User } from '@/types/User';

export const getUsers = async (): Promise<User[]> => {
  const response = await Get('/users');

  return response.data;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await Put(`/users/${id}`);

  return response.data;
};

export const login = async (data: LoginData): Promise<User> => {
  const response = await Post(`/users/login`, data);

  return response?.data;
};
