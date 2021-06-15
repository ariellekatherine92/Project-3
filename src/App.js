import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
//Components
import Home from './pages/Home';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Search from './pages/Search';
// Private route component


const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('This is a private route...')
  let user = localStorage.getItem('jwtToken');

  return <Route {...rest} render={ (props) => {
      return user ? <Component {...rest} {...props} /> : <Redirect to='/login' />
  }}/>
}

function App() {

  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // if there is no token inside localStorage, then the user is not authenticated
    if (!localStorage.getItem('jwtToken')) {
        console.log('is not authenticated...');
        setIsAuthenticated(false);
    } else {
        token = jwt_decode(localStorage.getItem('jwtToken'));
        console.log('token', token);
        setAuthToken(token); // come back to this. 
        setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = userData => {
      console.log('--- inside nowCurrentUser ---');
      setCurrentUser(userData);
      setIsAuthenticated(true); 
  }

  const handleLogout = () => {
      if (localStorage.getItem('jwtToken')) {
          localStorage.removeItem('jwtToken'); // if there is a token, then remove it
          setCurrentUser(null); // set the currentUser to null
          setIsAuthenticated(false) // set is auth to false
      }
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Welcome} />
        <Route path='/login' 
                render={ (props) => <Login {...props} user={currentUser} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} /> } />
        <Route path="/signup" exact component={Signup} />
        <Route path="/search/:type" component={Search} />
        <PrivateRoute path='/profile' component={ Profile } user={currentUser} handleLogout={handleLogout} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
