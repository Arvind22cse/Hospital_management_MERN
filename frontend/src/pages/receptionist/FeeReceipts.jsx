import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '/src/pages/Header.jsx';
import './FeeReceipts.css';

const FeeReceipts = () => {
  const navigate = useNavigate();
  const [receipts, setReceipts] = useState([]);
  const [showGenerateForm, setShowGenerateForm] = useState(false);
  const [newReceipt, setNewReceipt] = useState({
    patient: '',
    doctor: '',
    consultationFee: '',
    medicineFee: ''
  });

  const handleChange = (e) => {
    setNewReceipt({
      ...newReceipt,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    const total = parseInt(newReceipt.consultationFee) + parseInt(newReceipt.medicineFee);
    const receipt = {
      ...newReceipt,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      total: total
    };
    setReceipts([...receipts, receipt]);
    setShowGenerateForm(false);
    setNewReceipt({ patient: '', doctor: '', consultationFee: '', medicineFee: '' });
  };

  const handlePrint = (receipt) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Fee Receipt</title>
          <style>
            body { font-family: Arial; padding: 40px; }
            .receipt { max-width: 500px; margin: 0 auto; border: 1px solid #ccc; padding: 30px; }
            .header { text-align: center; margin-bottom: 30px; }
            .header h1 { color: #0a4a70; margin: 0; }
            .details { margin: 20px 0; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            td { padding: 10px; border-bottom: 1px dashed #ccc; }
            .total { font-size: 1.3rem; font-weight: bold; text-align: right; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="receipt">
            <div class="header">
              <h1>MedCare Hospital</h1>
              <p>Fee Receipt</p>
            </div>
            <div class="details">
              <p><strong>Patient:</strong> ${receipt.patient}</p>
              <p><strong>Doctor:</strong> ${receipt.doctor}</p>
              <p><strong>Date:</strong> ${receipt.date}</p>
            </div>
            <table>
              <tr><td>Consultation Fee</td><td>₹${receipt.consultationFee}</td></tr>
              <tr><td>Medicine Fee</td><td>₹${receipt.medicineFee}</td></tr>
            </table>
            <div class="total">Total: ₹${receipt.total}</div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="fee-receipts">
      <Header role="Receptionist Panel" userName="Anita Verma" onLogout={() => navigate('/signin')} />
      <div className="dashboard-container">
        <div className="receipts-header">
          <h1>Fee Receipts</h1>
          <button onClick={() => setShowGenerateForm(true)} className="generate-btn">
            + Generate New Receipt
          </button>
        </div>

        {showGenerateForm && (
          <div className="generate-form">
            <h2>Generate New Receipt</h2>
            <form onSubmit={handleGenerate}>
              <div className="form-group">
                <label>Patient Name</label>
                <input 
                  type="text"
                  name="patient"
                  value={newReceipt.patient}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Doctor Name</label>
                <input 
                  type="text"
                  name="doctor"
                  value={newReceipt.doctor}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Consultation Fee (₹)</label>
                  <input 
                    type="number"
                    name="consultationFee"
                    value={newReceipt.consultationFee}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Medicine Fee (₹)</label>
                  <input 
                    type="number"
                    name="medicineFee"
                    value={newReceipt.medicineFee}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">Generate Receipt</button>
                <button type="button" onClick={() => setShowGenerateForm(false)} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Consultation</th>
                <th>Medicine</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {receipts.length > 0 ? (
                receipts.map((receipt) => (
                  <tr key={receipt.id}>
                    <td>{receipt.patient}</td>
                    <td>{receipt.doctor}</td>
                    <td>{receipt.date}</td>
                    <td>₹{receipt.consultationFee}</td>
                    <td>₹{receipt.medicineFee}</td>
                    <td><strong>₹{receipt.total}</strong></td>
                    <td>
                      <button onClick={() => handlePrint(receipt)} className="print-btn">
                        🖨️ Print
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="empty-state">
                    No receipts generated yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeReceipts;