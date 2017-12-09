import React from 'react';
import is from 'is_js';
import { connect } from 'react-redux';
import InfiniteScroll from '../InfiniteScroll';
import CareerItem from './CareerItem';
import FilteredList from '../FilteredList';
import { addCareer, removeCareer } from '../../redux/careers';


const CareerPanel = ({ careers, filter, selections, dispatch, selectedCareers }) => (
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
            selected={is.inArray(car.id, selectedCareers)}
            onClick={() => {
              if (is.inArray(car.id, selectedCareers)) {
                dispatch(removeCareer(car.id, car.count));
              } else {
                dispatch(addCareer(car.id, car.count));
              }
            }}
          />
        ))}
      </FilteredList>
    </InfiniteScroll>
  </section>
);

export default connect(state => ({
  filter: state.query.filter,
  selections: state.query.selections,
  selectedCareers: state.careers.careers,
}))(CareerPanel);
