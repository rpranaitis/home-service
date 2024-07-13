import { useState, useEffect, FC } from 'react';
import axiosInstance from '@/config/axios';
import styles from './Booking.module.scss';

import Heading from '@/components/Heading/Heading';
import BookingMenu from './partials/BookingMenu/BookingMenu';
import BookingList from './partials/BookingList/BookingList';
import { Booking as BookingType } from '@/types/common';
import { useUserContext } from '@/context/UserContext';

const Booking: FC = () => {
  const { user } = useUserContext();
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [currentTab, setCurrentTab] = useState<string>('booked');

  useEffect(() => {
    const fetchBookings = async () => {
      if (user) {
        try {
          const response = await axiosInstance.get(`/bookings/user/${user.email}`);
          setBookings(response.data);
        } catch (error) {
          console.error('Error fetching bookings', error);
        }
      }
    };

    fetchBookings();
  }, [user]);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <Heading>My Bookings</Heading>
      <BookingMenu onTabChange={handleTabChange} />
      <BookingList bookings={bookings} currentTab={currentTab} />
    </>
  );
};

export default Booking;
