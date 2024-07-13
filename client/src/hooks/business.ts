import { useQuery } from '@tanstack/react-query';
import { fetchBusinesses, fetchBusiness } from '../api/business';

export const BUSINESS_KEY = 'BUSINESS';

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: fetchBusinesses,
  });
};

export const useBusiness = (id: string) => {
  return useQuery({
    queryKey: [BUSINESS_KEY, id],
    queryFn: fetchBusiness,
    enabled: !!id,
  });
};
