/**
 * Offers Component
 * This page displays promotional deals and discount codes to the user.
 * It uses high-contrast Bootstrap color themes to make the offers visually striking.
 */

import React from 'react';

function Offers() {
  return (
    <div className="container my-5 text-center">
      <h2 className="mb-4">🔥 Limited Time Offers</h2>
      
      {/* Grid Row: 
        'justify-content-center' ensures the offer cards are centered if the screen is wide.
      */}
      <div className="row justify-content-center">
        
        {/* Student Deal Card: Uses 'bg-warning' (yellow) for high visibility */}
        <div className="col-md-5 mb-3">
          <div className="card bg-warning text-dark shadow p-4">
            <h3>Student Deal</h3>
            {/* 'display-6' creates a large, prominent heading for the discount amount */}
            <p className="display-6 fw-bold">20% OFF</p>
            <p>On all Programming books</p>
            <small>Use code: STUDENT20</small>
          </div>
        </div>

        {/* Bundle Deal Card: Uses 'bg-success' (green) to signal a positive 'buy' action */}
        <div className="col-md-5 mb-3">
          <div className="card bg-success text-white shadow p-4">
            <h3>Bundle Joy</h3>
            <p className="display-6 fw-bold">Buy 2 Get 1</p>
            <p>On all Self Development books</p>
            <small>Discount applied at checkout</small>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Offers;