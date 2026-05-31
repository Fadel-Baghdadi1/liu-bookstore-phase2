import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// If you have a global CSS file, keep this line. 
// Otherwise, Bootstrap from your index.html handles the rest.
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);