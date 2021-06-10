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

function App() {
  // Set state values
  const [businesses, setBusinesses] = useState([]);

  const getYelpResults = useCallback(() => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=restaurant&location=SanDiego`, {
      headers: {
        'Authorization': `Bearer oXuKoZijv8fziZTs5FxqFvo8zUC6A6I0WAathMrbRPCphprIhIyYEwXLpZxUe939iRDRkvbKbRxHKS_z-DvV-fGK0aCSSHSJCo27eto-9ym79UckJQMTodze_-DAYHYx`,
        'Access-Control-Allow-Origin': '*',
      },
    }).then(({ data }) => {
      if (Array.isArray(data?.businesses)) {
        setBusinesses(data.businesses);
      }
    }).catch(err => {
      console.error(err);
    });
  }, []);

  const getGoogleResults = useCallback(() => {
    console.log('google axios request goes here');
  }, []);

  useEffect(() => {
    getYelpResults();
    getGoogleResults();
  }, [
    getYelpResults, 
    getGoogleResults,
  ]);

  useEffect(() => {
    console.log(businesses);
  }, [businesses]);

  return (
    <div className="App">
      {/* <Navbar  /> */}
      
      <Footer />
    </div>
  );
}

export default App;
