import styles from './SearchCategory.module.scss';
import { useParams, generatePath, Link } from 'react-router-dom';
import { categories } from '../../components/Categories/constants';
import { ROUTES } from '../../router/constants';
import { capitalizeFirstLetter } from '../../utils/strings';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const SearchCategory = () => {
  const { category } = useParams();

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
        <span className={styles.serviceHeader}>{capitalizeFirstLetter(category)}</span>
        <div className={styles.servicesContainer}>
          <ServiceCard
            imageUrl="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            category={category}
            title="House Cleaning"
            credentials="Rolandas Pranaitis"
            address="Savanorių pr. 254, Kaunas"
          />
          <ServiceCard
            imageUrl="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            category={category}
            title="House Cleaning"
            credentials="Rolandas Pranaitis"
            address="Savanorių pr. 254, Kaunas"
          />
          <ServiceCard
            imageUrl="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            category={category}
            title="House Cleaning"
            credentials="Rolandas Pranaitis"
            address="Savanorių pr. 254, Kaunas"
          />
          <ServiceCard
            imageUrl="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            category={category}
            title="House Cleaning"
            credentials="Rolandas Pranaitis"
            address="Savanorių pr. 254, Kaunas"
          />
          <ServiceCard
            imageUrl="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            category={category}
            title="House Cleaning"
            credentials="Rolandas Pranaitis"
            address="Savanorių pr. 254, Kaunas"
          />
          <ServiceCard
            imageUrl="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
            category={category}
            title="House Cleaning"
            credentials="Rolandas Pranaitis"
            address="Savanorių pr. 254, Kaunas"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
