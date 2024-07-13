import axiosInstance from '../config/axios';
import { Business } from '../types/common';

export const fetchBusinesses = async (): Promise<Business[]> => {
  const response = await axiosInstance.get('/businesses');

  return await response.data;
};

export const fetchBusiness = async ({ queryKey }: { queryKey: [string, string] }): Promise<Business> => {
  const [, id] = queryKey;
  const response = await axiosInstance.get(`/businesses/${id}`);

  return response.data;
};

export const searchBusinesses = async (query: string): Promise<Business[]> => {
  const response = await axiosInstance.get(`/businesses/search?q=${query}`);

  return response.data;
};
