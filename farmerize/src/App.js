import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import FoodData from './FoodData.json';
import NavBar from './components/NavBar';
import Product from './pages/Product';
import Home from './pages/Home';

const App = () => {
  return (
    // <div className="App">
    //   <NavBar />
    // </div>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
