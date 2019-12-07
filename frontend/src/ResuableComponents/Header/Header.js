import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {



  const handleScroll = () => { 
      const scroll = window.scrollY;
      const header = document.getElementById('header');
      const rightSection = document.querySelector('.feedPage__rightSection');

      if (scroll >= 60) {
        header.classList.add('header-fixed');
        // rightSection.classList.add('feedPage__rightSection--fixed');
      } else {
        header.classList.remove('header-fixed');
        // rightSection.classList.remove('feedPage__rightSection--fixed');
      }
  }
  
  window.addEventListener('scroll', handleScroll);
  return(
    <div id="header">
      <div className="header-inner container">

        <div className="left-items">

          <div className="logo-icon">
            <Link className="siteLogo_icon_atag" to="/">
              <i class="fab fa-instagram"></i>
            </Link>
          </div>

          <div className="separator"></div>

          <div className="site-name">
            <Link className="sitename_atag" to="/">
                <h1>Instagram</h1>
            </Link>
          </div>

        </div>

        <div className="search-box">
          <input type="text" placeholder="Search"/>
          <div className=""></div>
        </div>

        <div className="right-items">
          <Link className="explore_atag" to="/explore/">
            <i class="far fa-compass"></i>
          </Link>

          <i class="far fa-heart"></i>
          <Link className="userProfile_icon_atag" to="/profile">
            <i class="far fa-user"></i>
          </Link>

        </div>

      </div>
    </div>
  );
}
export default Header;