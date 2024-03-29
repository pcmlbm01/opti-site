// Header.js
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <h2>Contact</h2>
      <div className='social-icons'>
        <i class="fa-brands fa-discord"></i>
        <i class="fa-brands fa-facebook-messenger"></i>
        <i class="fa-brands fa-square-x-twitter"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-solid fa-link"></i>
      </div>
    </div>
  );
};

export default Header;