import React, { FC } from 'react';
import { Booking as BookingType } from '@/types/common';
import styles from './BookingCard.module.scss';
import NoImage from '@/assets/no-image.svg';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

interface BookingCardProps {
  booking: BookingType;
}

const BookingCard: FC<BookingCardProps> = ({ booking }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} key={booking._id}>
        <div>
          <img src={booking.business.imageUrls[0] || NoImage} alt="NoPhoto" />
        </div>
        <div>
          <div>{booking.business.name}</div>
          <div>
            <PermIdentityIcon style={{ marginRight: '10px' }} />
            {booking.business.contactPerson}
          </div>
          <div>
            <RoomOutlinedIcon style={{ marginRight: '10px' }} /> <span> {booking.business.address}</span>
          </div>
          <div>
            <CalendarMonthOutlinedIcon style={{ marginRight: '10px' }} />
            <span style={{ marginRight: '5px' }}>Service on:</span>
            <span>{formatDate(booking.date)}</span>
          </div>
          <div>
            <AccessTimeOutlinedIcon style={{ marginRight: '10px' }} />
            <span style={{ marginRight: '5px' }}>Service on:</span>
            <span>{booking.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
