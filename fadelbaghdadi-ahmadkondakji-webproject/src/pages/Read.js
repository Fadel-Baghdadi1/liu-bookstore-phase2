/**
 * Read Component (Book Preview)
 * This page simulates a reader/previewer. 
 * It dynamically grabs the book ID from the URL query parameters 
 * to show the user which book they are currently previewing.
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Read() {
  // location is used to access the current URL and its query strings (?book=...)
  const location = useLocation();
  // navigate is used to move the user between pages
  const navigate = useNavigate();
  
  // URLSearchParams parses the string after the '?' in the URL
  const query = new URLSearchParams(location.search);
  // Extracts the value of 'book' from the URL (e.g., /read?book=CleanCode)
  const bookId = query.get('book');

  return (
    <div className="container my-5">
      {/* Back Navigation: navigate(-1) tells the browser to go back to the previous page in history */}
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        ← Back to Catalog
      </button>
      
      {/* Main Preview Container */}
      <div className="bg-light p-5 rounded shadow-sm text-center">
        {/* Dynamic Header: Shows the book name or a default "Book" if the ID is missing */}
        <h1 className="display-5">Previewing: {bookId || "Book"}</h1>
        <hr className="my-4" />
        
        {/* Simulated Reader Window */}
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

        {/* Call to Action: Encourages the user to move from previewing to purchasing */}
        <button className="btn btn-primary mt-4" onClick={() => navigate('/buy')}>
          Buy Full Version
        </button>
      </div>
    </div>
  );
}

export default Read;