/**
 * Login Component
 * Handles user authentication via a controlled form.
 * Includes basic validation for empty fields and password length.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // State hooks to store user input and handle validation messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Hook to redirect users after a successful login
  const navigate = useNavigate();

  /**
   * handleLogin
   * Processes the form submission, validates inputs, 
   * and navigates to the book catalog if checks pass.
   */
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the browser from refreshing the page
    setError('');       // Reset error message on new attempt

    // Basic Validation: Ensure fields are not empty
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Security Validation: Minimum password length check
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // On success, proceed to the main book catalog
    navigate('/catalog'); 
  };

  return (
    // Flexbox classes center the card vertically and horizontally on the screen (vh-100)
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: '360px' }}>
        <h3 className="text-center mb-3">Login</h3>

        {/* Conditional rendering: Only shows the alert if an error exists */}
        {error && (
          <div className="alert alert-danger py-2 small text-center" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          {/* Email Input Field */}
          <div className="mb-3">
            <label>Email</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Updates state on keystroke
              required 
            />
          </div>

          {/* Password Input Field */}
          <div className="mb-3">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Min. 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          
          <p className="text-center mt-3 small text-muted">
            New users can login directly
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;