import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  
  return(
    <div id="Header">
      <div className="header-inner container mx-auto">

        <div className="left-items">
          <div className="logo-icon">
            <i class="fab fa-instagram"></i>
          </div>
          <div className="separator"></div>
          <div className="site-name">
            <h1>Instagram</h1>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search"/>
        </div>

        <div className="right-items">
          <i class="far fa-compass"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-user"></i>
        </div>

      </div>
    </div>
  );
}
export default Header;