import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './CategoryButton.module.scss';

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  url: string;
  color: string;
}

const CategoryButton: FC<CategoryButtonProps> = ({ active = false, url, color, children, ...props }) => {
  return (
    <button className={classNames(styles.button, active ? styles.activeButton : undefined)} {...props}>
      <img src={`${url}&color=${color}`} className={styles.icon}/>
      {children}
    </button>
  );
};

export default CategoryButton;
