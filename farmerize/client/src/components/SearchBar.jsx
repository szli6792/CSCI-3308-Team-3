import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './SearchBar.css';
import search_img from '../assets/search.svg';

/*
Search bar component. 
*/

const SearchBar = () => {

  const [searchterm, setSearch] = useState("");

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    if (searchterm.length > 0) {
      navigate('/results', {state:{searchterm: searchterm}});
      setSearch("")
    }
  }

  return (
    <div className="searchbar">
      <input 
        type='text'
        id='search'
        name='search'
        value={searchterm}
        minlength="1"
        onChange={(e) => setSearch(e.target.value)}
        class="search_input">
      </input>
      <button className="search_button" type="submit" onClick={handleSubmit}>
        <img
          className="search_icon"
          src={search_img}
          width="100%"
          height="100%"
          alt="search"
        ></img>
      </button>
    </div>
  );
};

export default SearchBar;
