import { React, Component } from 'react';
import { Link } from "react-router-dom";
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div>
        <div className='cardcontainer'>
          <div className='card-img-container'>
            <img className="card-img" src={`/images/${this.props.data.Img}`} alt="test" width="150px" height="125px"/>
          </div>
          <div className='card-category-container'>
            <p className='card-category'>
              {this.props.data.Category}
          </p>
          </div>
          <div className='card-name-container'>
            <p className='card-name'>
              {this.props.data.Name}
          </p>
          </div>
          <div className='card-rating-container'>
            <img className="card-ratings" src={`/images/four.png`} alt=""></img> 
          </div>
          <div className='card-farm-container'>
            <p className='card-farm'>
              {this.props.data.FarmID}
          </p>
          </div>
          <div className='card-base '>
            <div className='card-price-container'>
              <p className='card-price'>
                ${this.props.data.Price}
            </p>
            </div>
            <div className='card-link-container'>
              <Link to='/product' state={{productid: this.props.data.ProductID}}>
                <button className='view-product'>View Product</button>
              </Link>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Card;
