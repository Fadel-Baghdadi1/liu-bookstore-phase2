/**
 * Main Component (Book Catalog)
 * This page serves as the main store front where users can browse, 
 * filter by category, and add books to their cart.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

// Local data array representing the book inventory
const booksData = [
  { id: 'CleanCode', title: 'Clean Code', author: 'Robert C. Martin', category: 'Programming', price: 18, pages: 464, description: 'Learn how to write clean, professional, maintainable software code.', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794' },
  { id: 'AtomicHabits', title: 'Atomic Habits', author: 'James Clear', category: 'Self Development', price: 15, pages: 320, description: 'Build good habits and break bad ones through small daily improvements.', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f' },
  { id: 'Alchemist', title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', price: 12, pages: 208, description: 'A journey about dreams, destiny, and discovering your purpose.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f' },
  { id: '1984', title: '1984', author: 'George Orwell', category: 'History', price: 14, pages: 328, description: 'A dystopian world of surveillance, control, and loss of freedom.', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383' },
  { id: 'RichDad', title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', category: 'Finance', price: 16, pages: 336, description: 'Teaches financial intelligence and how money really works.', img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d' },
  { id: 'ThinkingFast', title: 'Thinking Fast and Slow', author: 'Daniel Kahneman', category: 'Psychology', price: 20, pages: 499, description: 'Explains how humans make decisions using two thinking systems.', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' }
];

// Destructuring 'onAddToCart' prop which is passed from App.js
function Main({ onAddToCart }) {
  // State to track which category the user has selected from the dropdown
  const [selectedCategory, setSelectedCategory] = useState('All Books');

  /**
   * Filter Logic:
   * If 'All Books' is selected, show everything.
   * Otherwise, filter the array to match the selected category string.
   */
  const filteredBooks = selectedCategory === 'All Books' 
    ? booksData 
    : booksData.filter(b => b.category === selectedCategory);

  return (
    <div className="container my-4">
      {/* Category Selection Dropdown */}
      <h3 className="mb-3">Choose Category</h3>
      <select 
        className="form-select mb-3" 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option>All Books</option>
        <option>Programming</option>
        <option>History</option>
        <option>Science</option>
        <option>Self Development</option>
        <option>Fiction</option>
        <option>Finance</option>
        <option>Psychology</option>
      </select>

      {/* Navigation Link to Contact Page */}
      <div className="text-end mb-4">
        <Link to="/contact" className="btn btn-outline-danger">
          ❓ Didn't find your book? Contact us
        </Link>
      </div>

      <h3 className="mb-3">Books Collection</h3>
      
      {/* Responsive Grid System:
          Cards will stack on mobile and show 3-per-row on medium+ screens (col-md-4) */}
      <div className="row g-4">
        {filteredBooks.map((book) => (
          <div className="col-md-4" key={book.id}>
            {/* Prop Drilling: Passing individual book data and the cart function
                down to the reusable BookCard component */}
            <BookCard book={book} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;