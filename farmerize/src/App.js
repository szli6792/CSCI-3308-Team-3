import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import FoodData from './FoodData.json';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="App">
        <SearchBar placeholder="Test" data={FoodData} />
      </div>
    </div>
  );
}

export default App;
