import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../api/category';

export const CATEGORY_KEY = 'CATEGORY';

export const useCategories = () => {
  return useQuery({
    queryKey: [CATEGORY_KEY],
    queryFn: fetchCategories,
  });
};
