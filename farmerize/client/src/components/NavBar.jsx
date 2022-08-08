import React from 'react';
import './NavBar.css';
import SearchBar from './SearchBar.jsx';
import './SearchBar.css';
import { Link } from "react-router-dom";
import FoodData from '../FoodData.json';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';

/*
Header bar (header consistent across all webpages).
*/

const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <Link className='home-link' to='/'>
          <div className="logo">Farmerize</div>
        </Link>
        <div className="searchbar">
          <SearchBar />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
