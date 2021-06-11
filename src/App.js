// Imports
import React, { useEffect, useState, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
// import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import LocationForm from './components/LocationForm';
import BusinessesList from './components/BusinessesList';

function App() {
  const [yelpResults, setYelpResults] = useState([]);

  const fetchYelpResults = useCallback(location => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=restaurant&location=${location}`, {
      headers: {
        'Authorization': `Bearer oXuKoZijv8fziZTs5FxqFvo8zUC6A6I0WAathMrbRPCphprIhIyYEwXLpZxUe939iRDRkvbKbRxHKS_z-DvV-fGK0aCSSHSJCo27eto-9ym79UckJQMTodze_-DAYHYx`,
        'Access-Control-Allow-Origin': '*',
      },
    }).then(({ data }) => {
      if (Array.isArray(data?.businesses)) {
        setYelpResults(data.businesses);
      }
    }).catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div className="App">
      {/* <Navbar  /> */}
      <LocationForm fetchYelpResults={fetchYelpResults} />
      <BusinessesList yelpResults={yelpResults} />
      <Footer />
    </div>
  );
}

export default App;
