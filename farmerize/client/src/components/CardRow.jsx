import React from 'react';
import Card from './Card';
import './CardRow.css';
import { useFetch } from '../utils/hook';

/*
Card Row bar (home page row of products).
*/

const Scroll = () => {

  const [featured] = useFetch('/api/sql/getfeatured')
  const [popular] = useFetch('/api/sql/getpopular')
  const [highest] = useFetch('/api/sql/gethighest')

  return (
    <div>
      <div className="item-row">
        <h1 className='card-row-title'>Featured</h1>
        <div className="card-row">
          {featured.map((data, i) =>
            <Card data={data}/>
          )}
        </div>
        <h1 className='card-row-title'>Most Popular</h1>
        <div className="card-row">
          {popular.map((data, i) =>
            <Card data={data}/>
          )}
        </div>
        <h1 className='card-row-title'>Highest Rated</h1>
        <div className="card-row">
          {highest.map((data, i) =>
            <Card data={data}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
