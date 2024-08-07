import styles from './SearchCategory.module.scss';
import CategoryButton from '@/components/CategoryButton/CategoryButton';
import BusinessCard from '@/components/BusinessCard/BusinessCard';
import { useParams, generatePath, Link } from 'react-router-dom';
import { ROUTES } from '@/router/constants';
import { capitalizeFirstLetter } from '@/utils/strings';
import { Business, Category } from '@/types/common';
import { useBusinesses } from '@/hooks/business';
import { useCategories } from '@/hooks/category';

const SearchCategory = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category ?? '';

  const { data: categoryData } = useCategories();
  const categories: Category[] = categoryData ?? [];

  const { data: businessData } = useBusinesses();
  const businesses: Business[] = businessData ?? [];

  const filteredBusinesses = businesses.filter((item) => item.category === categoryName);

  return (
    <div className={styles.container}>
      <div className={styles.categoriesBlock}>
        <h3 className={styles.header}>Categories</h3>
        <div className={styles.listBlock}>
          <ul className={styles.listBlockList}>
            {categories.map((item: Category, index: number) => (
              <li key={index}>
                <Link to={generatePath(ROUTES.SEARCH_CATEGORY, { category: item.name })} className={styles.link}>
                  <CategoryButton active={category === item.name} url={item.url} color={item.color}>
                    {capitalizeFirstLetter(item.name)}
                  </CategoryButton>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.servicesBlock}>
        <span className={styles.serviceHeader}>{capitalizeFirstLetter(categoryName)}</span>
        <div className={styles.servicesContainer}>
          {filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((item) => <BusinessCard key={item._id} business={item} />)
          ) : (
            <p>No services</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
