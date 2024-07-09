import { FC, ReactNode } from 'react';
import styles from './CategoryBadge.module.scss';

interface CategoryBadgeProps {
  children: ReactNode;
}

const CategoryBadge: FC<CategoryBadgeProps> = ({ children }) => {
  return <div className={styles.badge}>{children}</div>;
};

export default CategoryBadge;
