// App.js
import React from 'react';
import Home from './components/home/Home';
import Opti from './components/opti/Opti';
import Contact from './components/contact/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Home />
      <Opti />
      <Contact />
    </div>
  );
};

export default App;
