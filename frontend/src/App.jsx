import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import SignIn from './pages/SignIn.jsx';
import PatientSignUp from './pages/PatientSignUp.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
import ReceptionistDashboard from './pages/ReceptionistDashboard.jsx';
import PatientDashboard from './pages/PatientDashboard.jsx';
// import Home from './pages/Home.jsx';

// Patient Sub-pages
// import OurDoctors from './pages/patient/OurDoctors.jsx';
// import BookAppointment from './pages/patient/BookAppointment.jsx';
// import MyAppointments from './pages/patient/MyAppointments.jsx';

// Doctor Sub-pages
import PrescribeMedicine from './pages/doctor/PrescribeMedicine.jsx';

// Receptionist Sub-pages
import FeeReceipts from './pages/receptionist/FeeReceipts.jsx';
// import BookDoctor from './pages/receptionist/BookDoctor.jsx';

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<PatientSignUp />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Doctor Routes */}
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/doctor/prescribe/:patientId" element={<PrescribeMedicine />} />

      {/* Receptionist Routes */}
      <Route path="/receptionist" element={<ReceptionistDashboard />} />
      <Route path="/receptionist/receipts" element={<FeeReceipts />} />
      {/* <Route path="/receptionist/book-doctor" element={<BookDoctor />} /> */}

      {/* Patient Routes */}
      <Route path="/patient" element={<PatientDashboard />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="doctors" element={<OurDoctors />} /> */}
        {/* <Route path="book-appointment" element={<BookAppointment />} /> */}
        {/* <Route path="my-appointments" element={<MyAppointments />} /> */}
      </Route>

      {/* 404 Redirect */}
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
}

export default App;