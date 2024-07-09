import { FC } from 'react';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import styles from './ServiceCard.module.scss';
import Button from '../Button/Button';
import { useLocalStorage } from 'usehooks-ts';
import { capitalizeFirstLetter } from '../../utils/strings';
import { GoHeart, GoHeartFill } from 'react-icons/go';

interface ServiceCardProps {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  credentials: string;
  address: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  imageUrl,
  category,
  title,
  credentials,
  address,
}) => {
  const [favorites, setFavorites] = useLocalStorage<number[]>('service-favorites', []);
  const isFavorite = favorites.includes(id);

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

export default ServiceCard;
