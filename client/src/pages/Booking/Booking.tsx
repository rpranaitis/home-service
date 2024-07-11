import styles from './Booking.module.scss';

import BookingMenu from '@/components/BookingMenu/BookingMenu';
import BookingList from '@/components/BookingList/BookingList';
import Heading from '@/components/Heading/Heading';

const Booking = () => {
  return (
    <>
      <Heading>My Bookings</Heading>
      <BookingMenu />
      <BookingList />
    </>
  );
};

export default Booking;
