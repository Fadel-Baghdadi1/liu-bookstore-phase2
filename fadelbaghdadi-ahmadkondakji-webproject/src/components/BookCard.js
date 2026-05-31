/**
 * BookCard Component
 * A reusable UI component that displays individual book details.
 * It receives 'book' data and the 'onAddToCart' function as props from the parent (Main.js).
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookCard({ book, onAddToCart }) {
  // Hook for navigating to the 'Read' (Preview) page
  const navigate = useNavigate();

  return (
    // 'h-100' ensures all cards in a row have the same height even if descriptions vary
    <div className="card shadow h-100">
      {/* Book Cover Image with object-fit to ensure all images look uniform */}
      <img 
        src={book.img} 
        className="card-img-top" 
        alt={book.title} 
        style={{height: '200px', objectFit: 'cover'}}
      />
      
      <div className="card-body d-flex flex-column">
        <h5>{book.title}</h5>
        <p className="text-muted mb-1">{book.author}</p>
        
        {/* Dynamic metadata display */}
        <p className="mb-1"><b>Category:</b> {book.category}</p>
        <p className="mb-1"><b>Price:</b> ${book.price}</p>
        <span className="badge bg-secondary w-fit-content" style={{width: 'fit-content'}}>
          {book.pages} pages
        </span>
        
        <p className="mt-2 small text-truncate-3">{book.description}</p>
        
        {/* Action Buttons: Pushed to the bottom of the card */}
        <div className="d-flex gap-2 mt-auto pt-3">
          {/* Navigates to the Read page with a Query Parameter (?book=ID) */}
          <button 
            className="btn btn-success btn-sm"
            onClick={() => navigate(`/read?book=${book.id}`)}
          >
            Free Preview
          </button>
          
          {/* Calls the function passed down from App.js to update the global cart */}
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => onAddToCart(book)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;