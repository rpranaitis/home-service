import styles from './BookingMenu.module.scss';

const BookingMenu = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>Booked</div>
        <div>Completed</div>
      </div>
    </section>
  );
};

export default BookingMenu;
