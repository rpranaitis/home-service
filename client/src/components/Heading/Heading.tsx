import { FC, ReactNode } from 'react';
import styles from './Heading.module.scss';

interface HeadingProps {
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2>{children}</h2>
      </div>
    </section>
  );
};

export default Heading;
