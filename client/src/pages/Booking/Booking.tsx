import styles from './Booking.module.scss';

import BookingMenu from '@/components/BookingMenu/BookingMenu';
import BookingList from '@/components/BookingList/BookingList';

const Booking = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h2>My Bookings</h2>
        </div>
      </section>

      <BookingMenu />

      <BookingList />
    </>
  );
};

export default Booking;
