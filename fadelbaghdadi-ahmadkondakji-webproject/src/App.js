import React, { useState } from 'react'; //
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
  // 1. Create the cart state
  const [cart, setCart] = useState([]); //

  // 2. Define the function to add items
  const handleAddToCart = (book) => {
    setCart([...cart, book]);
    alert(`${book.title} added to cart!`);
  };

  return (
    <Router>
      {/* 3. Pass the cart count to NavBar so it updates */}
      <NavBar cartCount={cart.length} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* 4. PASS THE FUNCTION HERE to fix the error */}
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