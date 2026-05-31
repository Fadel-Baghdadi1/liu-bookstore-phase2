/**
 * Entry Point: index.js
 * This file is responsible for "mounting" the React application into the 
 * physical DOM of the web browser.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importing global styles

// Locate the 'root' div in the public/index.html file.
// This is where the entire React application will be "injected".
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  /**
   * React.StrictMode is a wrapper that helps find potential problems 
   * in the application during development. It doesn't render any visible UI.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);