import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './Categories.module.scss';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { categories } from './constants';

const Categories = () => {
  const navigate = useNavigate();

  const navigateToCategory = (category) => {
    navigate(generatePath(ROUTES.SEARCH_CATEGORY, { category: category.toLowerCase() }));
  };

  return (
    <div className={styles.container}>
      {categories.map((item, index) => (
        <CategoryCard
          key={index}
          onClick={() => navigateToCategory(item.title)}
          icon={item.icon}
          iconColor={item.iconColor}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Categories;
