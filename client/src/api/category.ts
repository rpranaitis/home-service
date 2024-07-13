import axiosInstance from '../config/axios';
import { Category } from '../types/common';

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get('/categories');

  return response.data;
};
