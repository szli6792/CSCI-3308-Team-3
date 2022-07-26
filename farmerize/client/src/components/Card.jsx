import React from 'react';
import './Card.css';
import apple from '../assets/apple.png'

const Card = () => {

  const name = "Apple"
  const category = ""

  return (
  <div className='cardcontainer'>
    <div className='card-img-container'>
      <img className="card-img" src={apple} alt="apple" width="150px" height="150px"/>
    </div>
    <div>
      <p>

      </p>
    </div>
    <div className='card-name-container'>
      <p className='card-name'>
        {name}
      </p>
    </div>
  </div>);
};

export default Card;
