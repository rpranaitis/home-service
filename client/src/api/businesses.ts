import axiosInstance from "../config/axios";
import { Business } from "../types/common";

export const fetchBusinesses = async (): Promise<Business[]> => {
  const response = await axiosInstance.get("/businesses");
  
  return await response.data;
};