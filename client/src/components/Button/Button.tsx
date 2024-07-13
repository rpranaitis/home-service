import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clean?: boolean;
  className?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ clean = false, className = '', children, ...props }) => {
  return (
    <button className={classNames(className, clean ? styles.clean : styles.button)} {...props}>
      {children}
    </button>
  );
};

export default Button;
