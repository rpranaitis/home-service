import axiosInstance from '../config/axios';
import { LoginFormValues, RegisterFormValues, UserResponse } from '../types/common';

export const loginUser = async (data: LoginFormValues): Promise<UserResponse> => {
  const response = await axiosInstance.post('/auth/login', data);

  return await response.data;
};

export const registerUser = async (data: RegisterFormValues): Promise<UserResponse> => {
  const response = await axiosInstance.post('/auth/register', data);

  return await response.data;
};
