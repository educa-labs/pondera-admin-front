import React from 'react';
import is from 'is_js';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '../../styled/Card';
import CareerItem from './CareerItem';
import { addCareer, removeCareer } from '../../redux/careers';


const Box = styled.div`
  height: 28rem;
  overflow: scroll;
`;

const CareerPanel = ({ careers, filter, selections, dispatch, selectedCareers }) => (
  <Card>
    <Box>
      {careers && careers.map(car => (
        <CareerItem
          career={car}
          key={car.cId}
          selected={is.inArray(car.cId, selectedCareers)}
          onClick={() => {
            if (is.inArray(car.cId, selectedCareers)) {
              dispatch(removeCareer(car.cId, car.count));
            } else {
              dispatch(addCareer(car.cId, car.count));
            }
          }}
        />
      ))}
      <div>Mostrar más</div>
    </Box>
  </Card>
);

export default connect(state => ({
  selectedCareers: state.careers.careers,
}))(CareerPanel);
