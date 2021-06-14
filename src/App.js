import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';
import { Home, Profile, Search } from './pages';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/search/:type" component={Search} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
