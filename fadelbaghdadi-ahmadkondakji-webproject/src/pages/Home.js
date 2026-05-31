/**
 * Home Component
 * This is the landing page of the application.
 * It introduces the user to the bookstore and provides quick access to the login flow.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    // Hook to enable programmatic navigation between routes
    const navigate = useNavigate();

    return (
        <div className="home-page">
            {/* Hero Section: Main welcome message and call to action */}
            <header className="text-center bg-light p-5">
                <h1>Welcome to Book Booking</h1>
                <p>Read free previews, explore categories, and buy books easily</p>
                
                {/* Redirects user to the Login page to start their journey */}
                <button 
                    className="btn btn-primary" 
                    onClick={() => navigate('/login')}
                >
                    Get Started
                </button>
            </header>

            {/* Featured Categories Section: Visual display of available genres */}
            <section className="container my-5 text-center">
                <div className="row">
                    <div className="col-md-3">
                        <h5>📖 Programming</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>🏛️ History</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>🔬 Science</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>💡 Self Development</h5>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;