import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <header className="text-center bg-light p-5">
                <h1>Welcome to Book Booking</h1>
                <p>Read free previews, explore categories, and buy books easily</p>
                <button 
                    className="btn btn-primary" 
                    onClick={() => navigate('/login')}
                >
                    Get Started
                </button>
            </header>

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