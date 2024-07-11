import axiosInstance from '../config/axios';
import { User } from '../types/common';

interface IUser {
  status: string;
  message?: string;
  token: string;
  user: User;
}

interface loginData {
  email: string;
  password: string;
}

interface registerData {
  name: string;
  age: number;
  email: string;
  password: string;
}

export const login = async (data: loginData): Promise<IUser> => {
  const response = await axiosInstance.post('/auth/login', data);

  return await response.data;
};

export const register = async (data: registerData): Promise<object> => {
  const response = await axiosInstance.post('/auth/register', data);

  return await response.data;
};
