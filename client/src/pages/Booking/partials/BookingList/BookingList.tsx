import React from 'react';
import { Booking as BookingType } from '@/types/common';
import BookingCard from '@/components/BookingCard/BookingCard';

interface BookingListProps {
  bookings: BookingType[];
  currentTab: string;
}

const BookingList: React.FC<BookingListProps> = ({ bookings, currentTab }) => {
  const filteredBookings = bookings.filter((booking) => {
    if (currentTab === 'booked') {
      return booking.status === 'confirmed' || booking.status === 'pending';
    } else if (currentTab === 'completed') {
      return booking.status === 'completed';
    }
    return false;
  });

  return (
    <div>
      {filteredBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {filteredBookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
