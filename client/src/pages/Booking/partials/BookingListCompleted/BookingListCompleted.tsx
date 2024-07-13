import styles from './BookingListCompleted.module.scss';

import NoPhoto from '@/assets/no-image.svg';

const BookingListCompleted = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img src={NoPhoto} alt="NoPhoto" />
          </div>
          <div>Details</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img src={NoPhoto} alt="NoPhoto" />
          </div>
          <div>Details</div>
        </div>
      </div>
    </section>
  );
};

export default BookingListCompleted;
