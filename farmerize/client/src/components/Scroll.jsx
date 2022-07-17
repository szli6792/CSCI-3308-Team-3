import React from 'react';
import arrow from '../assets/arrow.png';
import placehldr from '../assets/placeholder.svg';
import Card from './Card';

const Scroll = () => {
  return (
    <div>
      <div className="item-row">
        <div className="arrow">
          <img src={arrow} alt="test" height="40px" width="47px"></img>
        </div>
        <div className="card">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
