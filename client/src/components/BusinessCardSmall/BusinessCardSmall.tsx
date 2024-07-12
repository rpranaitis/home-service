import { FC } from 'react';
import styles from './BusinessCardSmall.module.scss';

interface BusinessCardSmallProps {
  id: string;
  name: string;
  address: string;
  contactPerson: string;
  imageUrls: string[];
}

const BusinessCardSmall: FC<BusinessCardSmallProps> = ({ id, name, address, contactPerson, imageUrls }) => {
  return (
    <div className={styles.businessCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrls[0] ?? ''} alt={name} />
      </div>
      <div className={styles.infoContainer}>
        <h4>{name}</h4>
        <span className={styles.contactPerson}>{contactPerson}</span>
        <span className={styles.address}>{address}</span>
      </div>
    </div>
  );
};

export default BusinessCardSmall;
