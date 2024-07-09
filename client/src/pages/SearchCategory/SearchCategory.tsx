import styles from './SearchCategory.module.scss';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { useParams, generatePath, Link } from 'react-router-dom';
import { categories } from '../../components/Categories/constants';
import { ROUTES } from '../../router/constants';
import { capitalizeFirstLetter } from '../../utils/strings';
import { services } from '../../utils/data';

const SearchCategory = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category ?? '';
  const filteredServices = services.filter((item) => item.category === category);

  return (
    <div className={styles.container}>
      <div className={styles.categoriesBlock}>
        <h3 className={styles.header}>Categories</h3>
        <div className={styles.listBlock}>
          <ul className={styles.listBlockList}>
            {categories.map((item, index) => (
              <li key={index}>
                <Link
                  to={generatePath(ROUTES.SEARCH_CATEGORY, { category: item.title.toLowerCase() })}
                  className={styles.link}
                >
                  <CategoryButton
                    active={category === item.title.toLowerCase()}
                    icon={item.icon}
                    iconColor={item.iconColor}
                  >
                    {item.title}
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
          {filteredServices.length > 0 ? (
            filteredServices.map((item) => (
              <ServiceCard
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                category={capitalizeFirstLetter(item.category)}
                title={item.title}
                credentials={item.credentials}
                address={item.address}
              />
            ))
          ) : (
            <p>No services</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
