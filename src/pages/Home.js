import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div id="home-container">
            <h1>Travel Nomad</h1>

            <section>
                <Link to="/search/restaurant">
                    <div className="business-type restaurants">
                        <h3>Restaurants</h3>
                    </div>
                </Link>
                
                <Link to="/search/attraction">
                    <div className="business-type attractions">
                        <h3>Attractions</h3>
                    </div>
                </Link>

                <Link to="/search/hotel">
                    <div className="business-type hotels">
                        <h3>Hotels</h3>
                    </div>
                </Link>
            </section>
        </div>
    );
};

export default Home;