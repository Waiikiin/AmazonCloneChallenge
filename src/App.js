import React, { useEffect } from 'react'
import './App.css'
import Home from './Home'
import Header from './Header'
import Checkout from './Checkout'
import Login from './Login'
import Orders from './Orders'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51JERAiKk8OJsN8HVssyOtf0d1L8BvFbhtY1Xd081IYkuGXxJDjcFJcVsPgfSq6tZdHiFYCLcT6aoEs2Etp2L4PlP00jxKWwCBQ");

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
    //BEM
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

          {/* About */}
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
