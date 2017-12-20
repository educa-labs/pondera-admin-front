import React from 'react';
import is from 'is_js';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '../../styled/Card';
// import InfiniteScroll from '../InfiniteScroll';
import CareerItem from './CareerItem';
import FilteredList from '../FilteredList';
import { addCareer, removeCareer } from '../../redux/careers';


const Box = styled.div`
  height: 28rem;
  overflow: scroll;
`;

const CareerPanel = ({ careers, filter, selections, dispatch, selectedCareers }) => (
  <Card>
    {/* <FilteredList filter={filter} filterBy="label" selections={selections} selectBy="uId"> */}
    <Box>
      {careers && careers.map(car => (
        <CareerItem
          label={car.title}
          uId={car.uId}
          career={car}
          key={car.cId}
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
    </Box>
    {/* </FilteredList> */}
  </Card>
);

export default connect(state => ({
  filter: state.query.filter,
  selections: state.query.selections,
  selectedCareers: state.careers.careers,
}))(CareerPanel);
