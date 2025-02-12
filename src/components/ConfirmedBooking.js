import React from 'react';

const ConfirmedBooking = ({ reservationDetails }) => {
  return (
    <div className='confirm'>
      <div className="confirmation-message">
        <h1 style={{ color: 'lightgreen' }}>Your Booking has been confirmed!</h1>
        <p>Here are your reservation details:</p>
        <ul>
          <li><strong>Date:</strong> {reservationDetails.date}</li>
          <li><strong>Time:</strong> {reservationDetails.time}</li>
          <li><strong>Number of Guests:</strong> {reservationDetails.guests}</li>
          <li><strong>Occasion:</strong> {reservationDetails.occasion}</li>
        </ul>
        <p>Thank you for choosing us. We look forward to seeing you!</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;