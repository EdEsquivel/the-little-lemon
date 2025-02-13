import React, { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !guests) {
      return; // Prevent submission if any required field is missing
    }
    const reservationDetails = {
      date,
      time,
      guests,
    };
    props.submitForm(reservationDetails);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Book a Table</legend>

            {/* Date Selection */}
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                id="book-date"
                name="book-date"
                onChange={(e) => handleChange(e.target.value)}
                value={date}
                required
              />
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                name="book-time"
                onChange={(e) => setTime(e.target.value)}
                value={time}
                required
              >
                <option value="">Select a time</option>
                {props.availableTimes.availableTimes.map((availableTime) => (
                  <option key={availableTime}>{availableTime}</option>
                ))}
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                type="number"
                id="book-guests"
                name="book-guests"
                min="1"
                onChange={(e) => setGuests(e.target.value)}
                value={guests}
                required
              />
            </div>

            {/* Occasion Selection */}
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                name="book-occasion"
                onChange={(e) => setOccasion(e.target.value)}
                value={occasion}
              >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className='btnReceive'>
              <input type="submit" aria-label='On Click' value={"Book Now"} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;