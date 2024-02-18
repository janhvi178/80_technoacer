import React, { useState } from 'react';

const AppointmentScheduler = () => {
  // State variables for appointment details
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Function to handle form submission
  const handleAppointmentSubmit = (event) => {
    event.preventDefault();
    // Perform any validation if needed
    // Here, we'll just log the appointment details
    console.log(`Appointment scheduled for ${name} on ${date} at ${time}`);
    // Reset form fields
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <h2>Appointment Scheduler</h2>
      <form onSubmit={handleAppointmentSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        />
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentScheduler;
