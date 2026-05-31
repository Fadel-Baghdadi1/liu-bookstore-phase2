import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookCard({ book, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <div className="card shadow h-100">
      <img 
        src={book.img} 
        className="card-img-top" 
        alt={book.title} 
        style={{height: '200px', objectFit: 'cover'}}
      />
      <div className="card-body">
        <h5>{book.title}</h5>
        <p className="text-muted mb-1">{book.author}</p>
        <p className="mb-1"><b>Category:</b> {book.category}</p>
        <p className="mb-1"><b>Price:</b> ${book.price}</p>
        <span className="badge bg-secondary">{book.pages} pages</span>
        <p className="mt-2 small">{book.description}</p>
        <div className="d-flex gap-2 mt-3">
          <button 
            className="btn btn-success btn-sm"
            onClick={() => navigate(`/read?book=${book.id}`)}
          >
            Free Preview
          </button>
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