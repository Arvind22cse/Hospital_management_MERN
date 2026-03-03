import React from 'react';
import './MyAppointments.css';

const MyAppointments = () => {
  const appointments = [
    { doctor: 'Dr. Priya Sharma', date: '2026-03-04', time: '10:00 AM', status: 'confirmed' }
  ];

  return (
    <div className="my-appointments">
      <h2 className="page-title">My Appointments</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt, idx) => (
              <tr key={idx}>
                <td>{apt.doctor}</td>
                <td>{apt.date}</td>
                <td>{apt.time}</td>
                <td>{apt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;