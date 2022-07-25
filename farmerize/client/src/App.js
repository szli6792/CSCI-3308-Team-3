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
        <Route exact path="/aboutus" element={<AboutUsPage {...aboutUsPageData} />}/>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const aboutUsPageData = {
  loremIpsumDolorSi1: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare et odio et urna sed. <br /><br />Ante pellentesque justo, odio imperdiet. Phasellus suspendisse sit sagittis, scelerisque senectus orci eget quis.</React.Fragment>,
  overlapGroup4: "/img/line-2@1x.svg",
  line1: "/img/line-1@1x.svg",
  connectingLocalFar: "Connecting local farmers with their community.",
  vector2: "/img/vector-2@1x.svg",
  vector3: "/img/vector-3@1x.svg",
  ourStory: "Our Story",
  loremIpsumDolorSi2: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare et odio et urna sed. <br /><br />Ante pellentesque justo, odio imperdiet. Phasellus suspendisse sit sagittis, scelerisque senectus orci eget quis. Fringilla quis nunc sit vel enim amet egestas.Ante pellentesque justo, odio imperdiet. Phasellus suspendisse sit sagittis, scelerisque senectus orci eget quis. Fringilla quis nunc sit vel enim.</React.Fragment>,
  line3: "/img/line-2@1x.svg",
  line4: "/img/line-1@1x.svg",
  joinOurTeam: "Join our team.",
  vector5: "/img/vector-5@1x.svg",
  loremIpsumDolorSi3: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare et odio et urna sed. <br /><br />Ante pellentesque justo, odio imperdiet. Phasellus suspendisse sit sagittis, scelerisque senectus orci eget quis. Fringilla quis nunc sit vel enim amet egestas.Ante pellentesque justo, odio imperdiet. Phasellus suspendisse sit sagittis, scelerisque senectus orci eget quis. Fringilla quis nunc sit vel enim.</React.Fragment>,
  liSend: "/img/li-send@2x.svg",
  enterYourEmailAddress: "Enter your email address",
  subscribe: "Subscribe",
  ourMission: "Our Mission",
  vector6: "/img/vector-6@1x.svg",
};


export default App;
