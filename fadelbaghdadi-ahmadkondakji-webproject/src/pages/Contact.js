import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="text-center mb-4">❓ Didn't find your book?</h3>
        <p className="text-center text-muted">Send us the title you're looking for and we'll try to find it for you!</p>
        
        <form>
          <div className="mb-3">
            <label className="form-label">Book Title</label>
            <input type="text" className="form-control" placeholder="Enter book name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input type="email" className="form-control" placeholder="name@example.com" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message (Optional)</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-danger w-100">Send Request</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;