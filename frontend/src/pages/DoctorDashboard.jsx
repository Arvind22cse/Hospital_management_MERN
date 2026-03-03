import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '/src/pages/Header.jsx';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [showPrescribe, setShowPrescribe] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const appointments = [
    {
      patient: 'Rahul Mehta',
      date: '2026-03-04',
      time: '10:00 AM',
      bookedBy: 'patient',
      status: 'confirmed'
    }
  ];

  const handlePrescribe = (patient) => {
    setSelectedPatient(patient);
    setShowPrescribe(true);
  };

  const handleAddMedicine = () => {
    const medicineEntry = document.createElement('div');
    medicineEntry.className = 'medicine-entry';
    medicineEntry.innerHTML = `
      <div class="form-group">
        <label>Medicine</label>
        <input type="text" placeholder="Enter medicine name" />
      </div>
      <div class="form-group">
        <label>Dosage</label>
        <input type="text" placeholder="e.g., 500mg twice daily" />
      </div>
      <div class="form-group">
        <label>Duration</label>
        <input type="text" placeholder="e.g., 5 days" />
      </div>
    `;
    document.getElementById('medicines-container').appendChild(medicineEntry);
  };

  const handleSubmitPrescription = () => {
    alert('Prescription submitted successfully!');
    setShowPrescribe(false);
  };

  return (
    <div className="doctor-dashboard">
      <Header role="Doctor Panel" userName="Dr. Priya Sharma" onLogout={() => navigate('/signin')} />
      <div className="dashboard-container">
        <h1 className="page-title">My Patients</h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h2>1</h2>
            <p>Total Patients</p>
          </div>
          <div className="stat-card">
            <h2>0</h2>
            <p>Pending</p>
          </div>
          <div className="stat-card">
            <h2>1</h2>
            <p>Confirmed</p>
          </div>
        </div>

        {showPrescribe ? (
          <div className="prescribe-form">
            <h2>Prescribe Medicine - {selectedPatient}</h2>
            
            <div id="medicines-container">
              <div className="medicine-entry">
                <div className="form-group">
                  <label>Medicine</label>
                  <input type="text" placeholder="Enter medicine name" />
                </div>
                
                <div className="form-group">
                  <label>Dosage</label>
                  <input type="text" placeholder="e.g., 500mg twice daily" />
                </div>
                
                <div className="form-group">
                  <label>Duration</label>
                  <input type="text" placeholder="e.g., 5 days" />
                </div>
              </div>
            </div>

            <button onClick={handleAddMedicine} className="secondary-btn">
              + Add Medicine
            </button>

            <div className="form-group">
              <label>Notes / Instructions</label>
              <textarea rows="3" placeholder="Additional instructions..."></textarea>
            </div>

            <div className="form-actions">
              <button onClick={handleSubmitPrescription} className="primary-btn">
                Submit Prescription
              </button>
              <button onClick={() => setShowPrescribe(false)} className="secondary-btn">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="section-header">
              <h2>Patient Appointments</h2>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Booked By</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((apt, idx) => (
                    <tr key={idx}>
                      <td>{apt.patient}</td>
                      <td>{apt.date}</td>
                      <td>{apt.time}</td>
                      <td>{apt.bookedBy}</td>
                      <td>
                        <span className="status-badge confirmed">{apt.status}</span>
                      </td>
                      <td>
                        <div className="action-group">
                          <button className="action-btn">Update</button>
                          <button 
                            className="action-btn primary"
                            onClick={() => handlePrescribe(apt.patient)}
                          >
                            Prescribe
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;