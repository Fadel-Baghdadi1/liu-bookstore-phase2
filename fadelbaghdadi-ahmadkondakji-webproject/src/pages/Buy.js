import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Buy() {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setError('');

    const isNumeric = /^\d+$/.test(phone);

    if (!isNumeric) {
      setError("Phone number must contain only numbers.");
      return;
    }

    if (phone.length < 8) {
      setError("Phone number is too short (minimum 8 digits).");
      return;
    }

    alert(`Thank you! Order confirmed for delivery to: ${address}`);
    navigate('/'); 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-3">Delivery Info</h3>

        {error && (
          <div className="alert alert-danger py-2 small text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleConfirmOrder}>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input 
              type="tel" 
              className="form-control" 
              placeholder="e.g., 71123456" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea 
              className="form-control" 
              rows="3" 
              placeholder="Street, Building, Floor..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Buy;