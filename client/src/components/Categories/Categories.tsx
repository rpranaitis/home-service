import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './Categories.module.scss';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { Category } from '../../types/common';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../api/categories';

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);

  const navigateToCategory = (category: string) => {
    navigate(generatePath(ROUTES.SEARCH_CATEGORY, { category: category.toLowerCase() }));
  };

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  return (
    <div className={styles.container}>
      {categories.map((item: Category, index: number) => (
        <CategoryCard key={index} onClick={() => navigateToCategory(item.name)} name={item.name} color={item.color} url={item.url} />
      ))}
    </div>
  );
};

export default Categories;
