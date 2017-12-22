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

const Date = styled.p`
  font-size: 14px;
  margin-left: 10px;
`;

const CareerPanel = ({
  careers,
  dispatch,
  selectedCareers,
  totalPages,
  currentPage,
  onRefresh,
  loading,
  date,
}) => (
  <Card>
    <Box>
      {careers && careers.map(car => (
        <CareerItem
          career={car}
          key={car.cid}
          selected={is.inArray(car.cid, selectedCareers)}
          onClick={() => {
            if (is.inArray(car.cid, selectedCareers)) {
              dispatch(removeCareer(car.cid, car.count));
            } else {
              dispatch(addCareer(car.cid, car.count, car.ctitle, car.utitle));
            }
          }}
        />
      ))}
      {is.empty(careers) && (
        <Subtitle>No hay carreras que mostrar</Subtitle>
      )}
      <div className="level">
        <div className="level-left">
          <button
            onClick={onRefresh}
            className={`button is-primary ${loading ? 'is-loading' : ''}`}
          >
            <span className="icon">
              <i className="fa fa-refresh" />
            </span>
            <span>Actualizar</span>
          </button>
          <Date>
            Últ. actualización {date}
          </Date>
        </div>
        {totalPages > currentPage && (
          <div className="level-right">
            <button
              className="button is-primary"
              onClick={() => {
                dispatch(nextPage());
              }}
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>
    </Box>
  </Card>
);

export default connect(state => ({
  selectedCareers: state.careers.careers,
}))(CareerPanel);
