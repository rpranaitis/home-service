import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clean?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ clean = false, children, ...props }) => {
  return (
    <button className={clean ? styles.clean : styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
