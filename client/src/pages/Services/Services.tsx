import styles from './Services.module.scss';
import { useBusinesses } from '../../hooks/business';
import BusinessCard from '../../components/BusinessCard/BusinessCard';

const Services = () => {
  const { data } = useBusinesses();

  return (
    <div className={styles.servicesContainer}>
      <header className={styles.servicesHeader}>
        <h1>Services</h1>
      </header>
      <div className={styles.servicesWrapper}>
        {data?.map((item) => (
          <BusinessCard key={item._id} business={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
