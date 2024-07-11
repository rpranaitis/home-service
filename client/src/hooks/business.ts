import { useQuery } from '@tanstack/react-query';
import { fetchBusinesses } from '../api/business';

export const BUSINESS_KEY = 'BUSINESS';

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: fetchBusinesses,
  });
};
