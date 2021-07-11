import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'

function App() {
  return (
    //BEM
    <div className="App">
      <Home />
      <Header />
      {/* About */}
    </div>
  );
}

export default App;
