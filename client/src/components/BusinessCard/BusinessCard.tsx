import { FC } from 'react';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import styles from './BusinessCard.module.scss';
import Button from '../Button/Button';
import { useLocalStorage } from 'usehooks-ts';
import { capitalizeFirstLetter } from '../../utils/strings';
import { GoHeart, GoHeartFill } from 'react-icons/go';

interface BusinessCardProps {
  id: string;
  name: string;
  address: string;
  category: string;
  contactPerson: string;
  imageUrls: string[];
  onClick: () => void;
}

const BusinessCard: FC<BusinessCardProps> = ({ id, name, address, category, contactPerson, imageUrls, onClick }) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('service-favorites', []);
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
    <div className={styles.businessCard}>
      <img src={imageUrls[0] ?? ''} alt={name} />
      <div className={styles.serviceDetailsWrapper}>
        <div className={styles.header}>
          <CategoryBadge>{capitalizeFirstLetter(category)}</CategoryBadge>
          <div onClick={toggleAddingToFavorites} className={styles.favorite}>
            {isFavorite ? <GoHeartFill /> : <GoHeart />}
          </div>
        </div>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.personCredentials}>{contactPerson}</span>
        <span className={styles.address}>{address}</span>
        <Button onClick={onClick}>Book Now</Button>
      </div>
    </div>
  );
};

export default BusinessCard;
