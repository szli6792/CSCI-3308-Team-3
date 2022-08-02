import React from 'react';
import send from '../assets/li-send.svg';
import './Home.css';
import CardRow from '../components/CardRow';
import Card from '../components/Card';
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
        </div>
      </div>
      <div className='all-cards'>
        <CardRow />
      </div>
      
    </div>
  );
};

export default Home;
