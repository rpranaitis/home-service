import { FC, ReactNode, HTMLAttributes } from 'react';
import styles from './CategoryCard.module.scss';

interface CategoryCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  iconColor: string;
  title: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ icon, iconColor, title, ...props }) => {
  return (
    <div className={styles.categoryCard} {...props}>
      <span className={styles.icon} style={{ color: iconColor }}>
        {icon}
      </span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default CategoryCard;
