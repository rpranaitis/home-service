import CategoryBadge from '../CategoryBadge/CategoryBadge';
import PropTypes from 'prop-types';
import styles from './ServiceCard.module.scss';
import Button from '../Button/Button';
import { useLocalStorage } from 'usehooks-ts';
import { capitalizeFirstLetter } from '../../utils/strings';
import { GoHeart, GoHeartFill } from 'react-icons/go';

const ServiceCard = ({ id, imageUrl, category, title, credentials, address }) => {
  const [favorites, setFavorites, removeFavorites] = useLocalStorage('service-favorites', []);
  const isFavorite = favorites.find((item) => item === id);
  const toggleAddingToFavorites = () => {
    setFavorites((oldFavorites) => {
      if (isFavorite) {
        return oldFavorites.filter((item) => item !== id);
      } else {
        return [...oldFavorites, id];
      }
    });
  };

  return (
    <div className={styles.serviceCard}>
      <img src={imageUrl} alt={title} />
      <div className={styles.serviceDetailsWrapper}>
        <div className={styles.header}>
          <CategoryBadge>{capitalizeFirstLetter(category)}</CategoryBadge>
          <div onClick={toggleAddingToFavorites} className={styles.favorite}>
            {isFavorite ? <GoHeartFill /> : <GoHeart />}
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.personCredentials}>{credentials}</span>
        <span className={styles.address}>{address}</span>
        <Button>Book Now</Button>
      </div>
    </div>
  );
};

ServiceCard.protoTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  credentials: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default ServiceCard;
