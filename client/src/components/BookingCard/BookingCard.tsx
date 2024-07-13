import { FC } from 'react';
import { Booking as BookingType } from '@/types/common';
import styles from './BookingCard.module.scss';
import NoImage from '@/assets/no-image.svg';

interface BookingCardProps {
  booking: BookingType;
}

const BookingCard: FC<BookingCardProps> = ({ booking }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} key={booking._id}>
        <div className={styles.card}>
          <div>
            <img src={NoImage} alt="NoPhoto" />
          </div>
          <div>
            <div>{booking.businessId}</div>
            <div>{booking.date}</div>
            <div>{booking.status}</div>
            <div>{booking.time}</div>
            <div>{booking.userEmail}</div>
            <div>{booking.userName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
