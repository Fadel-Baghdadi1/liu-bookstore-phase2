/**
 * Contact Component
 * This page provides a request form for users who cannot find a specific book.
 * It serves as a customer support/inquiry interface.
 */

import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      {/* Centered Responsive Card:
          'mx-auto' centers the element horizontally.
          'shadow' adds a Bootstrap depth effect.
          'style={{ maxWidth: "600px" }}' prevents the form from stretching too wide on desktops.
      */}
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="text-center mb-4">❓ Didn't find your book?</h3>
        <p className="text-center text-muted">
          Send us the title you're looking for and we'll try to find it for you!
        </p>
        
        <form>
          {/* Book Title Input Field */}
          <div className="mb-3">
            <label className="form-label">Book Title</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter book name" 
              required 
            />
          </div>

          {/* User Email Input Field - uses type="email" for browser-level validation */}
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="name@example.com" 
              required 
            />
          </div>

          {/* Optional Message Area using a Textarea for longer text */}
          <div className="mb-3">
            <label className="form-label">Message (Optional)</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>

          {/* Submit Button: 
              'btn-danger' gives it the red color to match the 'Didn't find your book' link in Main.js.
              'w-100' makes the button full-width inside the card.
          */}
          <button type="submit" className="btn btn-danger w-100">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;