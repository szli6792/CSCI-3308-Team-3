import React from 'react';
import './Card.css';

const Card = () => {

  const name = "Apple"
  const category = ""

  return (
  <div className='cardcontainer'>
    <div className='card-img-container'>
      <img className="card-img" src={'/images/apple.png'} alt="apple" width="150px" height="150px"/>
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
