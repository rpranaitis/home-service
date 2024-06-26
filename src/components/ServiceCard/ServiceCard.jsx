import CategoryBadge from '../CategoryBadge/CategoryBadge';
import PropTypes from 'prop-types';
import styles from './ServiceCard.module.scss';
import { capitalizeFirstLetter } from '../../utils/strings';
import Button from '../Button/Button';

const ServiceCard = ({ imageUrl, category, title, credentials, address }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={imageUrl} alt={title} />
      <div className={styles.serviceDetailsWrapper}>
        <CategoryBadge>{capitalizeFirstLetter(category)}</CategoryBadge>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.personCredentials}>{credentials}</span>
        <span className={styles.address}>{address}</span>
        <Button>Book Now</Button>
      </div>
    </div>
  );
};

ServiceCard.protoTypes = {
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  credentials: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default ServiceCard;
