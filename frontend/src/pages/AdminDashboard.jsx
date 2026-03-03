import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '/src/pages/Header.jsx';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const doctors = [
    { name: 'Dr. Priya Sharma', email: 'dr.sharma@hospital.com', specialization: 'Cardiology', phone: '9876543211' },
    { name: 'Dr. Amit Patel', email: 'dr.patel@hospital.com', specialization: 'Orthopedics', phone: '9876543212' },
    { name: 'Dr. Sneha Gupta', email: 'dr.gupta@hospital.com', specialization: 'Dermatology', phone: '9876543213' },
    { name: 'Dr. Farid Khan', email: 'dr.khan@hospital.com', specialization: 'Neurology', phone: '9876543214' }
  ];

  const medicines = [
    { name: 'Paracetamol 500mg', category: 'Analgesic', stock: 500, price: '₹5' },
    { name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 300, price: '₹12' },
    { name: 'Omeprazole 20mg', category: 'Antacid', stock: 200, price: '₹8' },
    { name: 'Metformin 500mg', category: 'Antidiabetic', stock: 400, price: '₹10' },
    { name: 'Amlodipine 5mg', category: 'Antihypertensive', stock: 250, price: '₹7' },
    { name: 'Azithromycin 500mg', category: 'Antibiotic', stock: 150, price: '₹15' }
  ];

  const equipments = [
    { name: 'ECG Machine', department: 'Cardiology', status: 'available', qty: 3 },
    { name: 'X-Ray Machine', department: 'Radiology', status: 'in-use', qty: 2 },
    { name: 'Ultrasound Scanner', department: 'Radiology', status: 'available', qty: 2 },
    { name: 'Ventilator', department: 'ICU', status: 'available', qty: 10 },
    { name: 'Patient Monitor', department: 'ICU', status: 'available', qty: 8 }
  ];

  return (
    <div className="admin-dashboard">
      <Header role="Admin" userName="Admin" onLogout={() => navigate('/signin')} />
      <div className="dashboard-container">
        <div className="stats-grid">
          <div className="stat-card">
            <h2>4</h2>
            <p>Doctors</p>
          </div>
          <div className="stat-card">
            <h2>1</h2>
            <p>Receptionists</p>
          </div>
          <div className="stat-card">
            <h2>6</h2>
            <p>Medicines</p>
          </div>
          <div className="stat-card">
            <h2>5</h2>
            <p>Equipments</p>
          </div>
        </div>

        {/* Doctors Section */}
        <div className="section-header">
          <h2>Doctors</h2>
          <button className="primary-btn">+ Add Doctor</button>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Specialization</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc, idx) => (
                <tr key={idx}>
                  <td>{doc.name}</td>
                  <td>{doc.email}</td>
                  <td>{doc.specialization}</td>
                  <td>{doc.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Receptionists Section */}
        <div className="section-header">
          <h2>Receptionists</h2>
          <button className="primary-btn">+ Add Receptionist</button>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anita Verma</td>
                <td>rec.anita@hospital.com</td>
                <td>9876543215</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Medicines Section */}
        <div className="section-header">
          <h2>Medicines</h2>
          <button className="primary-btn">+ Add Medicine</button>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med, idx) => (
                <tr key={idx}>
                  <td>{med.name}</td>
                  <td>{med.category}</td>
                  <td>{med.stock}</td>
                  <td>{med.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Equipments Section */}
        <div className="section-header">
          <h2>Equipments</h2>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Status</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {equipments.map((eq, idx) => (
                <tr key={idx}>
                  <td>{eq.name}</td>
                  <td>{eq.department}</td>
                  <td>
                    <span className={`status-badge ${eq.status}`}>
                      {eq.status}
                    </span>
                  </td>
                  <td>{eq.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;