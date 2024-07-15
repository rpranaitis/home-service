import { FC, HTMLAttributes } from 'react';
import styles from './CategoryCard.module.scss';
import { capitalizeFirstLetter } from '@/utils/strings';

interface CategoryCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  color: string;
  url: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ name, color, url, ...props }) => {
  return (
    <div className={styles.categoryCard} {...props}>
      <img src={`${url}&color=${color}`} className={styles.icon} />
      <span className={styles.title}>{capitalizeFirstLetter(name)}</span>
    </div>
  );
};

export default CategoryCard;
