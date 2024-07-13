import dayjs, { Dayjs } from 'dayjs';
import styles from './BookingView.module.scss';
import Button from '../Button/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Box, Chip } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import { Booking, Business, NewBooking } from '../../types/common';
import { useUserContext } from '../../context/UserContext';
import { bookService } from '../../api/booking';

interface BookingViewProps {
  business: Business;
  showDrawer: boolean;
  setShowDrawer: Dispatch<SetStateAction<boolean>>;
}

const BookingView: FC<BookingViewProps> = ({ business, showDrawer, setShowDrawer }) => {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState<Dayjs | null>(dayjs());

  const { user } = useUserContext();

  const handleChangeDate = (newDate: Dayjs) => {
    setDate(newDate);
    setTime(null);
  };

  const bookAnService = async () => {
    if (date && time) {
      if (user) {
        const data: NewBooking = {
          businessId: business._id,
          date: date.format('YYYY-MM-DD'),
          time: time.format('HH:mm'),
          userEmail: user.email,
          userName: user.name,
          status: 'pending',
        };

        try {
          const response: Booking = await bookService(data);
          alert('Service was booked successfully!');
          setShowDrawer(false);
        } catch (error: any) {
          alert(error.response.data.message ?? 'An unexpected error occurred.');
        }
      }
    } else {
      alert('Please pick the date and time slot!');
    }
  };

  useEffect(() => {
    if (showDrawer) {
      setDate(dayjs());
      setTime(null);
    }
  }, [showDrawer]);

  const generateTimeSlots = (selectedDate: Dayjs | null) => {
    const timeSlots = [];
    const now = dayjs();
    const startHour = selectedDate?.isSame(now, 'day') ? now.hour() + 1 : 0;

    for (let i = startHour; i < 24; i++) {
      timeSlots.push(dayjs().hour(i).minute(0));
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots(date);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.title}>Book an Service</h2>
        <span className={styles.text}>Select Date and Time slot to book an service</span>
      </div>
      <div className={styles.dateWrapper}>
        <span className={styles.heading}>Select Date</span>
        <div className={styles.datePickerWrapper}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={date} onChange={(newValue) => handleChangeDate(newValue)} minDate={dayjs()} />
          </LocalizationProvider>
        </div>
      </div>
      <div className={styles.timeWrapper}>
        <span className={styles.heading}>Select Time Slot</span>
        <Box display="flex" flexWrap="wrap" gap={1} className={styles.timeSlots}>
          {timeSlots.map((timeSlot, index) => (
            <Chip
              key={index}
              label={timeSlot.format('HH:mm')}
              variant={time && time.isSame(timeSlot, 'hour') ? 'filled' : 'outlined'}
              onClick={() => setTime(timeSlot)}
            />
          ))}
        </Box>
      </div>
      <Button onClick={bookAnService} className={styles.bookButton}>
        <FaCheckCircle />
        Book an Service
      </Button>
    </div>
  );
};

export default BookingView;
