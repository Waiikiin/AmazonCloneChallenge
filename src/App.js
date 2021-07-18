import React, { useEffect } from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'

function App() {
  const [{}, dispatch] = useStateValue();

  // will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in / the user was logged in
        console.log(authUser);
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
   <Router> 
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>

          <Route path="/payment">          
            <Header />
            <Payment/>
          </Route>

          <Route path="/">          
            <Header />
            <Home />
          </Route>

          {/* About */}
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
