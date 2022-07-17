import React from 'react';
import './NavBar.css';
import SearchBar from './SearchBar.jsx';
import './SearchBar.css';
import FoodData from '../FoodData.json';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';

const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">Farmerize</div>
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="link_container">
          <ul className="nav-links">
            <li>
              <img src={heart} alt="heart" width="24" height="24"></img>
            </li>
            <li className="link_text">
              <a>Wishlist</a>
            </li>
            <li>
              <img src={cart} alt="heart" width="32" height="32"></img>
            </li>
            <li className="link_text">
              <a>Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
