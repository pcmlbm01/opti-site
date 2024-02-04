// Home.js
import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">

      <div className='left-home-container'>
        <div>
          <h2><i class="fa-solid fa-person"></i>qui suis je</h2>
        </div>
        <div>
          <h2><i class="fa-solid fa-calendar-days"></i>comment réserver</h2>
        </div>
        <div>
         <h2><i class="fa-solid fa-brain"></i>comoprendre le site</h2>
        </div>
      </div>

      <div className='right-home-container'>
        <div>
          <h2><i class="fa-solid fa-meteor"></i>cque je propose</h2>
        </div>
        <div>
          <h2><i class="fa-solid fa-gears"></i>comment ça marche</h2>
        </div>
        <div>
         <h2><i class="fa-solid fa-plus"></i>other</h2>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
