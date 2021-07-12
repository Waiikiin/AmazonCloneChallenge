import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom'
import Checkout from './Checkout'

function App() {
  return (
    //BEM
   <Router> 
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1> I'm at the checkout Page</h1>
            <Checkout/>
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
