import React, { useState } from 'react';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const Booking = (props) => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);

  const submitForm = (details) => {
    setReservationDetails(details);
    setBookingConfirmed(true);
  };

  return (
    <div>
      {bookingConfirmed ? (
        <ConfirmedBooking reservationDetails={reservationDetails} />
      ) : (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={submitForm} />
      )}
    </div>
  );
};

export default Booking;