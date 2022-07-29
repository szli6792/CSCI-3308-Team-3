import React from 'react';
import './ResBar.css';
import test from '../assets/test.json';
import { Component } from 'react';


class ResBar extends Component {

    render() {
        return (
            <div className="res">
            <ul className='resbar-list'>
            {this.props.data.map((data, i) => <li key={i}>
                <img className="data_img" src={`/images/${data.Img}`} alt=""></img>
                <div className="data_price">${data.Price}</div>
                <h1 className="data_name">{data.Name}</h1>
                <img className="data_rating" src={`/images/four.png`} alt=""></img> 
                {/* <img className="data_rating" src={`${data.Rating}`} alt=""></img>  */}
                <div className="data_seller">{data.FarmID}</div>  
                <div className="data_description">{data.Description}</div>
            </li>)}
            </ul>
            </div>
        );
    }
}


export default ResBar;