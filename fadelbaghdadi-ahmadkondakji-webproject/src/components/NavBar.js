/**
 * NavBar Component
 * The persistent navigation header of the application.
 * It displays the brand logo, a link to the special offers, 
 * and a dynamic cart counter that updates as the user shops.
 */

import React from 'react';
import { Link } from 'react-router-dom';

// Destructuring 'cartCount' from props (passed from the global state in App.js)
function NavBar({ cartCount }) {
  return (
    /* 'navbar-dark bg-dark' provides a professional dark theme.
       'navbar' is the base Bootstrap class for navigation headers.
    */
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        
        {/* 'Link' is used instead of 'a' tags to allow React Router 
            to change pages without refreshing the browser. */}
        <Link to="/" className="navbar-brand">📚 BookStore</Link>

        <div>
          {/* Quick link to the Offers page with a distinct yellow 'warning' color */}
          <Link to="/offers" className="btn btn-warning btn-sm me-2">🔥 Offers</Link>

          {/* Cart Link with a Notification Badge:
              The badge is positioned absolutely relative to the button.
          */}
          <Link to="/buy" className="btn btn-outline-light position-relative">
            🛒 Cart
            
            {/* Dynamic Badge:
                'rounded-pill' creates the circular look.
                '{cartCount || 0}' ensures '0' is shown if the cart is empty.
            */}
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