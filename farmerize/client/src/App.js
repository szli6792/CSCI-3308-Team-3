import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import FoodData from './FoodData.json';
import NavBar from './components/NavBar';
import Product from './pages/Product';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUsPage from "./pages/AboutUsPage.jsx";
import Footer from './components/Footer'
import MyAccount from "./pages/MyAccount";
import ResultsPage from './pages/Results';

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
        <Route exact path="/myaccount" element={<MyAccount />} />
        <Route exact path="/aboutus" element={<AboutUsPage />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/results" element={<ResultsPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
