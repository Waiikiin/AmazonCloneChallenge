import React, { useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Payment from './pages/Payment';
import { auth } from './utils/firebase';
import { useStateValue } from './utils/StateProvider';
import stripe from './resources/stripe'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(stripe[0].secretKey);

function App() {
  const [{}, dispatch] = useStateValue();
  
  // will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in / the user was logged in
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
   <Router> 
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>

          <Route path="/payment">          
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>

          <Route path="/">          
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;