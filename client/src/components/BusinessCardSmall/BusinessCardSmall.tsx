import styles from './BusinessCardSmall.module.scss';
import { FC } from 'react';
import { Business } from '../../types/common';

interface BusinessCardSmallProps {
  business: Business;
}

const BusinessCardSmall: FC<BusinessCardSmallProps> = ({ business }) => {
  return (
    <div className={styles.businessCard}>
      <div className={styles.imageContainer}>
        <img src={business.imageUrls[0] ?? ''} alt={business.name} />
      </div>
      <div className={styles.infoContainer}>
        <h4>{business.name}</h4>
        <span className={styles.contactPerson}>{business.contactPerson}</span>
        <span className={styles.address}>{business.address}</span>
      </div>
    </div>
  );
};

export default BusinessCardSmall;
