import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './Categories.module.scss';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/constants';
import { Category } from '@/types/common';
import { useCategories } from '@/hooks/category';

const Categories = () => {
  const navigate = useNavigate();
  const { data: categoryData } = useCategories();
  const categories: Category[] = categoryData ?? [];

  const navigateToCategory = (category: string) => {
    navigate(generatePath(ROUTES.SEARCH_CATEGORY, { category: category.toLowerCase() }));
  };

  return (
    <div className={styles.container}>
      {categories.map((item: Category, index: number) => (
        <CategoryCard key={index} onClick={() => navigateToCategory(item.name)} name={item.name} color={item.color} url={item.url} />
      ))}
    </div>
  );
};

export default Categories;
