import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Read() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const bookId = query.get('book');

  return (
    <div className="container my-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        ← Back to Catalog
      </button>
      
      <div className="bg-light p-5 rounded shadow-sm text-center">
        <h1 className="display-5">Previewing: {bookId || "Book"}</h1>
        <hr className="my-4" />
        <div className="preview-content p-4 border bg-white" style={{ minHeight: '300px' }}>
          <p className="text-muted italic">
            [ This is a free preview for <strong>{bookId}</strong>. In a full app, 
            this would load the first 10 pages of the PDF. ]
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <button className="btn btn-primary mt-4" onClick={() => navigate('/buy')}>
          Buy Full Version
        </button>
      </div>
    </div>
  );
}

export default Read;