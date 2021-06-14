import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div id="home-container">
            <Link to="/restaurants">
                <div className="business-type restaurants">
                    <h3>Restaurants</h3>
                </div>
            </Link>
            
            <Link to="/attractions">
                <div className="business-type attractions">
                    <h3>Attractions</h3>
                </div>
            </Link>

            <Link to="/hotels">
                <div className="business-type hotels">
                    <h3>Hotels</h3>
                </div>
            </Link>
        </div>
    );
};

export default Home;
