/**
 * Buy Component
 * Handles the checkout process by collecting user delivery information.
 * Features form validation (digits only, minimum length)
 * and displays an order confirmation before redirecting home.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Buy() {
  // Controlled form state hooks for user inputs and validation alert display
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  
  // Hook to navigate programmatically back to the homepage after ordering
  const navigate = useNavigate();

  /**
   * handleConfirmOrder
   * Triggered on form submit. Validates formatting rules, alerts user
   * on confirmation success, and handles the page redirect.
   */
  const handleConfirmOrder = (e) => {
    e.preventDefault(); // Prevents default page refresh on form submission
    setError('');       // Clears existing error states upon a new submission attempt

    // Regular expression to test if the string consists entirely of numbers (\d)
    const isNumeric = /^\d+$/.test(phone);

    // Validation 1: Ensure input characters are purely numeric
    if (!isNumeric) {
      setError("Phone number must contain only numbers.");
      return;
    }

    // Validation 2: Ensure compliance with typical local phone length minimums (e.g., 8 digits)
    if (phone.length < 8) {
      setError("Phone number is too short (minimum 8 digits).");
      return;
    }

    // Displays success notification displaying the user-submitted address details
    alert(`Thank you! Order confirmed for delivery to: ${address}`);
    
    // Redirects user back to the landing page upon completing their purchase
    navigate('/'); 
  };

  return (
    // Centers the form card container using modern Bootstrap Flexbox utilities
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-3">Delivery Info</h3>

        {/* Short-circuit evaluation: conditionally renders alert message when errors surface */}
        {error && (
          <div className="alert alert-danger py-2 small text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleConfirmOrder}>
          {/* Phone Number Field */}
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input 
              type="tel" 
              className="form-control" 
              placeholder="e.g., 71123456" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Continuous synchronization with state
              required 
            />
          </div>

          {/* Detailed Delivery Address Area */}
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea 
              className="form-control" 
              rows="3" 
              placeholder="Street, Building, Floor..." 
              value={address}
              onChange={(e) => setAddress(e.target.value)} // Updates address hook on key change
              required
            ></textarea>
          </div>

          {/* Form Submit Button using a distinct green tone ('btn-success') for transactional operations */}
          <button type="submit" className="btn btn-success w-100">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Buy;