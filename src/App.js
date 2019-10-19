import React from 'react';
import './App.css';
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Tips from './components/tips/tips'
import Location from './components/location/location'

function App() {
  return (
    <div className="App">
      <Header />
      <Tips />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
