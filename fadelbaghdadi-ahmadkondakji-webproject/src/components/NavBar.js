import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cartCount }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="navbar-brand">📚 BookStore</Link>

        <div>
          <Link to="/offers" className="btn btn-warning btn-sm me-2">🔥 Offers</Link>

          <Link to="/buy" className="btn btn-outline-light position-relative">
            🛒 Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount || 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;