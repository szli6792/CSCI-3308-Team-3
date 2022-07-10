import React from 'react';
import './SearchBar.css';
import search from '../assets/search.svg';

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input
        className="search_input"
        type="text"
        id="search"
        placeholder="Search"
      ></input>
      <button className="search_button" type="submit">
        <img
          className="search_icon"
          src={search}
          width="100%"
          height="100%"
          alt="search"
        ></img>
      </button>
    </div>
  );
};

export default SearchBar;
