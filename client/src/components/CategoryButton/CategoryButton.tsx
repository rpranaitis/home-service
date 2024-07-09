import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './CategoryButton.module.scss';

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon: ReactNode;
  iconColor: string;
}

const CategoryButton: FC<CategoryButtonProps> = ({ active = false, icon, iconColor, children, ...props }) => {
  return (
    <button className={classNames(styles.button, active ? styles.activeButton : undefined)} {...props}>
      <div style={{ color: iconColor }} className={styles.icon}>
        {icon}
      </div>
      {children}
    </button>
  );
};

export default CategoryButton;
