import CategoryBadge from '../CategoryBadge/CategoryBadge';
import styles from './BusinessCard.module.scss';
import Button from '../Button/Button';
import classNames from 'classnames';
import { FC } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { capitalizeFirstLetter } from '../../utils/strings';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { Business } from '../../types/common';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';

interface BusinessCardProps {
  business: Business;
  className?: string;
}

const BusinessCard: FC<BusinessCardProps> = ({ business, className = '' }) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('service-favorites', []);
  const isFavorite = favorites.includes(business._id);
  const navigate = useNavigate();

  const toggleAddingToFavorites = () => {
    setFavorites((oldFavorites) => {
      if (isFavorite) {
        return oldFavorites.filter((item) => item !== business._id);
      } else {
        return [...oldFavorites, business._id];
      }
    });
  };

  return (
    <div className={classNames(styles.businessCard, className)}>
      <img src={business.imageUrls[0] ?? ''} alt={business.name} />
      <div className={styles.serviceDetailsWrapper}>
        <div className={styles.header}>
          <CategoryBadge>{capitalizeFirstLetter(business.category)}</CategoryBadge>
          <div onClick={toggleAddingToFavorites} className={styles.favorite}>
            {isFavorite ? <GoHeartFill /> : <GoHeart />}
          </div>
        </div>
        <h2 className={styles.title}>{business.name}</h2>
        <span className={styles.personCredentials}>{business.contactPerson}</span>
        <span className={styles.address}>{business.address}</span>
        <Button onClick={() => navigate(generatePath(ROUTES.BUSINESS_DETAILS, { id: business._id }))}>Book Now</Button>
      </div>
    </div>
  );
};

export default BusinessCard;
