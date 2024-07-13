import axiosInstance from '../config/axios';
import { Booking, NewBooking } from '../types/common';

export const bookService = async (booking: NewBooking): Promise<Booking> => {
  const response = await axiosInstance.post('/bookings', booking);

  return response.data;
};
