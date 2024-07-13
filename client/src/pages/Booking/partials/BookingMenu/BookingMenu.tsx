import React from 'react';
import styles from './BookingMenu.module.scss';

interface BookingMenuProps {
  onTabChange: (tab: string) => void;
}

const BookingMenu: React.FC<BookingMenuProps> = ({ onTabChange }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div onClick={() => onTabChange('booked')}>Booked</div>
        <div onClick={() => onTabChange('completed')}>Completed</div>
      </div>
    </section>
  );
};

export default BookingMenu;
