import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Avatar: FC<AvatarProps> = ({ children, ...props }) => {
  return (
    <div className={styles.avatar} {...props}>
      {children}
    </div>
  );
};

export default Avatar;
