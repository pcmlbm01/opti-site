// App.js
import React from 'react';
import Home from './components/home/Home';
import Opti from './components/opti/Opti';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Opti />
      <Footer />
    </div>
  );
};

export default App;
