import React from 'react';
import is from 'is_js';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '../../styled/Card';
import { Subtitle } from '../../styled/Text';
import CareerItem from './CareerItem';
import { addCareer, removeCareer } from '../../redux/careers';
import { nextPage } from '../../redux/leads';


const Box = styled.div`
  max-height: 27rem;
  overflow: scroll;
`;

const CareerPanel = ({
  careers,
  dispatch,
  selectedCareers,
  totalPages,
  currentPage,
}) => (
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
      {is.empty(careers) && (
        <Subtitle>No hay carreras que mostrar</Subtitle>
      )}
      {totalPages > currentPage && (
        <div className="level">
          <div className="level-left" />
          <div className="level-right">
            <button
              className="button is-primary"
              onClick={() => {
                dispatch(nextPage())
              }}
            >
              Mostrar más
            </button>
          </div>
        </div>
      )}
    </Box>
  </Card>
);

export default connect(state => ({
  selectedCareers: state.careers.careers,
}))(CareerPanel);
