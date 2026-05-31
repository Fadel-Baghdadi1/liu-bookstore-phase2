/**
 * App Component
 * This is the root component of the application.
 * It manages the global state (Shopping Cart) and handles all client-side routing.
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Buy from './pages/Buy';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Read from './pages/Read';

function App() {
  
  // Global State: 'cart' stores the list of book objects the user wants to buy.
  // This is kept here so the count can be shared with the NavBar.
  const [cart, setCart] = useState([]);


  /**
   * handleAddToCart
   * Function to update the global cart state.
   * Uses the spread operator (...cart) to keep existing items and add the new book.
   * Passed as a prop to the Catalog (Main.js) page.
   */
  const handleAddToCart = (book) => {
    setCart([...cart, book]);
    alert(`${book.title} added to cart!`);
  };

  return (
    // Router: Provides the context for navigation throughout the app
    <Router>
      
      {/* Navigation Bar: Stays visible on all pages. 
          The 'cartCount' prop allows it to display the real-time number of items in the cart. */}
      <NavBar cartCount={cart.length} /> 

      {/* Routes: Acts as a switch that renders only the component matching the current URL path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Main Catalog: We pass the 'handleAddToCart' function as a prop 
            so the 'Buy' buttons in the catalog can talk back to the App's state. */}
        <Route path="/catalog" element={<Main onAddToCart={handleAddToCart} />} /> 
        
        <Route path="/buy" element={<Buy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </Router>
  );
}

export default App;