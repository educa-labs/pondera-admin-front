import React from 'react';
import InfiniteScroll from '../InfiniteScroll';


const CareerPanel = ({ careers }) => (
  <section className="section">
    <h1 className="title">Carreras</h1>
    <InfiniteScroll onInfiniteScroll={() => console.log('llegamos al final')}>
      {careers && careers.map(car => (
        <div key={car.id} className="box">
          {car.title}
        </div>
      ))}
    </InfiniteScroll>
  </section>
);

export default CareerPanel;
