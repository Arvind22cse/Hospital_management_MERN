// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BookAppointment.css';

// const BookAppointment = () => {
//   const navigate = useNavigate();
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [formData, setFormData] = useState({
//     specialization: '',
//     doctor: '',
//     date: ''
//   });

//   const timeSlots = [
//     '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
//     '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM',
//     '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
//     '04:30 PM', '05:00 PM'
//   ];

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleConfirm = () => {
//     if (!selectedSlot) {
//       alert('Please select a time slot');
//       return;
//     }
//     alert('Appointment booked successfully!');
//     navigate('/patient/my-appointments');
//   };

//   return (
//     <div className="book-appointment">
//       <h1 className="page-title">Book an Appointment</h1>
      
//       <div className="appointment-form">
//         <p className="form-description">
//           Select a specialization, doctor, date and available time slot
//         </p>

//         <div className="form-group">
//           <label>Select Specialization</label>
//           <select name="specialization" value={formData.specialization} onChange={handleChange}>
//             <option value="">Choose specialization</option>
//             <option value="cardiology">Cardiology</option>
//             <option value="orthopedics">Orthopedics</option>
//             <option value="dermatology">Dermatology</option>
//             <option value="neurology">Neurology</option>
//           </select>
//         </div>

//         {formData.specialization && (
//           <div className="form-group">
//             <label>Select Doctor</label>
//             <select name="doctor" value={formData.doctor} onChange={handleChange}>
//               <option value="">Choose doctor</option>
//               <option value="Dr. Priya Sharma">Dr. Priya Sharma - Cardiology</option>
//               <option value="Dr. Amit Patel">Dr. Amit Patel - Orthopedics</option>
//               <option value="Dr. Sneha Gupta">Dr. Sneha Gupta - Dermatology</option>
//               <option value="Dr. Farid Khan">Dr. Farid Khan - Neurology</option>
//             </select>
//           </div>
//         )}

//         {formData.doctor && (
//           <div className="form-group">
//             <label>Pick a date</label>
//             <input 
//               type="date" 
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               min={new Date().toISOString().split('T')[0]}
//             />
//           </div>
//         )}

//         {formData.date && (
//           <div className="time-slots-section">
//             <h3>Available Time Slots - March 11th, 2026</h3>
//             <div className="slots-grid">
//               {timeSlots.map((slot, idx) => (
//                 <button
//                   key={idx}
//                   className={`time-slot ${selectedSlot === slot ? 'selected' : ''}`}
//                   onClick={() => setSelectedSlot(slot)}
//                 >
//                   {slot}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {selectedSlot && (
//           <button onClick={handleConfirm} className="confirm-btn">
//             Confirm Booking
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;