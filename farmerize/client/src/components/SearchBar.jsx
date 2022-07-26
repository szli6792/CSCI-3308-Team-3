import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './SearchBar.css';
import search_img from '../assets/search.svg';

const SearchBar = () => {

  const [search, setSearch] = useState("");

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    if (search.length > 0) {
      navigate('/aboutus', {state:{search: search}});
      setSearch("")
    }
  }

  return (
    <div className="searchbar">
      <input 
        type='text'
        id='search'
        name='search'
        value={search}
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
