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

/* 
PRIMARY STRUCTURE OF CODE BASE 

APP (This page): CSCI-3308-Team-3/farmerize/client/src/App.js --> Directory of pages within the website.

PAGES: CSCI-3308-Team-3/farmerize/client/src/pages/ --> Contains all the website pages broken down into javascript (page.jsx) and css (page.css) files.
- Home page: CSCI-3308-Team-3/farmerize/client/src/pages/Home.jsx /
- About us page: CSCI-3308-Team-3/farmerize/client/src/pages/AboutUsPage.jsx /
- Results page: CSCI-3308-Team-3/farmerize/client/src/pages/Results.jsx /
- Product page: CSCI-3308-Team-3/farmerize/client/src/pages/Product.jsx /
- Sign up page: CSCI-3308-Team-3/farmerize/client/src/pages/MyAccount.jsx /

COMPONENTS: CSCI-3308-Team-3/farmerize/client/src/components/ --> Contains sections of code that is likely to be reused in multiple places to save space
and time, broken down into javascript (component.jsx) and css (component.css) files.
- Header bar: CSCI-3308-Team-3/farmerize/client/src/components/NavBar.jsx /
- Footer bar: CSCI-3308-Team-3/farmerize/client/src/components/Footer.jsx /
- Sub bar: CSCI-3308-Team-3/farmerize/client/src/components/SubBar.jsx /
- Search bar: CSCI-3308-Team-3/farmerize/client/src/components/SearchBar.jsx /
- Results bar: CSCI-3308-Team-3/farmerize/client/src/components/ResBar.jsx /
- Card: CSCI-3308-Team-3/farmerize/client/src/components/Card.jsx /
- Card row: CSCI-3308-Team-3/farmerize/client/src/components/CardRow.jsx /

IMAGES: CSCI-3308-Team-3/farmerize/client/public/images/ --> Contains image files used throughout website dynamically.

ASSETS: CSCI-3308-Team-3/farmerize/client/src/assets/ --> Contains image files used throughout website staticly.

TESTS: CSCI-3308-Team-3/farmerize/client/tests/ --> Contains selenium Python testing files.

SERVER: CSCI-3308-Team-3/farmerize/server/index.js / --> Contains code interfacing front end with database / back end.

UTILITIES: CSCI-3308-Team-3/farmerize/client/src/utils/ --> Contains code connecting website to database.

PROXY: CSCI-3308-Team-3/farmerize/client/src/setupProxy.js / --> Contains code connecting website to proxy server.
*/

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
