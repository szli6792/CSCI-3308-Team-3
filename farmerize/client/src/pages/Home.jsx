import React from 'react';
import send from '../assets/li-send.svg';
import './Home.css';
import Scroll from '../components/Scroll';
import { usePost } from '../utils/post';

const Home = () => {
  
  // const resp = usePost('/api/sql/subscribe?email="test@gmail.com"');
  // console.log(resp)

  return (
    <div>
      <div className="overlap-group2">
        <div className="flex-col">
          <div className="hero-headline">
            <h1 className="top-quality-produce">
              Top quality produce, from our farms to your table.
            </h1>
          </div>
          <div className="subscribe-formz">
            <div className="newsletter-form">
              <img className="lisend" src={send} alt="sendimg"></img>
              <input type="text" className="email-entry"></input>
              <div className="subscribe-btn">
                <button className="subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-deals">
        <h1 className="featured-deals-header">Featured Deals</h1>
      </div>
      <div className="featured-deals-row">
        <Scroll />
      </div>
    </div>
  );
};

export default Home;
