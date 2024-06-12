import { Get, Put } from '@/plugins/axios';
import type { User } from '@/types/User';

export const getUsers = async (): Promise<User[]> => {
  const response = await Get('/users');

  return response.data;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await Put(`/users/${id}`);
  return response.data;
};
