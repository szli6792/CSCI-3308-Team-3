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
      </nav>
    </div>
  );
};

export default NavBar;
