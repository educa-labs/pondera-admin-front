import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from '../InfiniteScroll';
import CareerItem from './CareerItem';
import FilteredList from '../FilteredList';


const CareerPanel = ({ careers, filter, selections }) => (
  <section className="section">
    <h1 className="title">Carreras</h1>
    <InfiniteScroll onInfiniteScroll={() => console.log('llegamos al final')}>
      <FilteredList filter={filter} filterBy="label" selections={selections} selectBy="uId">
        {careers && careers.map(car => (
          <CareerItem
            label={car.title}
            uId={car.uId}
            career={car}
            key={car.id}
          />
        ))}
      </FilteredList>
    </InfiniteScroll>
  </section>
);

export default connect(state => ({
  filter: state.query.filter,
  selections: state.query.selections,
}))(CareerPanel);
