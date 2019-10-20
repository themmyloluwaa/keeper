import React from 'react';
import './App.css';
import Footer from './components/footer/footer'
import Header from './components/header/header'
import TipandLocation from './components/layouts/tipandlocation'

function App() {
  return (
    <div className="App">
      <Header  />
      <TipandLocation />
      <Footer />
    </div>
  );
}

export default App;
