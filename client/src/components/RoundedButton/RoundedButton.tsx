import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './RoundedButton.module.scss';

interface RoundedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const RoundedButton: FC<RoundedButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default RoundedButton;
