import React from 'react';
import './OurDoctors.css';

const OurDoctors = () => {
  const doctors = [
    { name: 'Dr. Priya Sharma', spec: 'Cardiology' },
    { name: 'Dr. Amit Patel', spec: 'Orthopedics' },
    { name: 'Dr. Sneha Gupta', spec: 'Dermatology' },
    { name: 'Dr. Farid Khan', spec: 'Neurology' }
  ];

  return (
    <div className="our-doctors">
      <h2 className="page-title">Our Doctors</h2>
      <div className="doctors-grid">
        {doctors.map((d, idx) => (
          <div key={idx} className="doctor-card">
            <h3>{d.name}</h3>
            <p>{d.spec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;