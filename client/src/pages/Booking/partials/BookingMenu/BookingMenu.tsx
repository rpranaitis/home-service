import React, { useState } from 'react';
import styles from './BookingMenu.module.scss';

interface BookingMenuProps {
  onTabChange: (tab: string) => void;
}

const BookingMenu: React.FC<BookingMenuProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>('booked');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.tab} ${activeTab === 'booked' ? styles.active : ''}`} onClick={() => handleTabChange('booked')}>
          Booked
        </div>
        <div className={`${styles.tab} ${activeTab === 'completed' ? styles.active : ''}`} onClick={() => handleTabChange('completed')}>
          Completed
        </div>
      </div>
    </section>
  );
};

export default BookingMenu;
