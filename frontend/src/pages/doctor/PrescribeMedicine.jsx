import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '/src/pages/Header.jsx';
import './PrescribeMedicine.css';

const PrescribeMedicine = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([{ name: '', dosage: '', duration: '' }]);
  const [notes, setNotes] = useState('');

  const addLine = () => {
    setMedicines([...medicines, { name: '', dosage: '', duration: '' }]);
  };

  const handleChange = (i, e) => {
    const copy = [...medicines];
    copy[i][e.target.name] = e.target.value;
    setMedicines(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Prescription sent to patient ' + patientId);
    navigate('/doctor');
  };

  return (
    <div className="prescribe-page">
      <Header role="Doctor Panel" userName="Doctor" onLogout={() => navigate('/signin')} />
      <div className="container">
        <h1 className="page-title">Prescribe for {patientId}</h1>
        <form onSubmit={handleSubmit}>
          {medicines.map((m, idx) => (
            <div key={idx} className="form-group">
              <input
                name="name"
                placeholder="Medicine"
                value={m.name}
                onChange={(e) => handleChange(idx, e)}
              />
              <input
                name="dosage"
                placeholder="Dosage"
                value={m.dosage}
                onChange={(e) => handleChange(idx, e)}
              />
              <input
                name="duration"
                placeholder="Duration"
                value={m.duration}
                onChange={(e) => handleChange(idx, e)}
              />
            </div>
          ))}
          <button type="button" className="secondary-btn" onClick={addLine}>
            + Add line
          </button>
          <div className="form-group">
            <label>Notes</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
          <button type="submit" className="primary-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrescribeMedicine;