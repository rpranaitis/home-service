import styles from './BookingListBooked.module.scss';
import NoPhoto from '@/assets/no-image.svg';

const BookingListBooked = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img src={NoPhoto} alt="NoPhoto" />
          </div>
          <div>Info place</div>
        </div>
        <div className={styles.card}>
          <div>
            <img src={NoPhoto} alt="NoPhoto" />
          </div>
          <div>Info place</div>
        </div>
      </div>
    </section>
  );
};

export default BookingListBooked;