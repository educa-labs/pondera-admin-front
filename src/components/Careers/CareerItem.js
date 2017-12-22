import React from 'react';
import styled from 'styled-components';

const Level = ({ className, children, ...rest }) => (
  <div
    className={`level ${className}`}
    {...rest}
  >
    {children}
  </div>
);

const primary = props => props.theme.colors.primary;

const selected = props => (
  props.selected ? props.theme.colors.primary : props.theme.colors.accent
);


const StyledLevel = styled(Level)`
  border: 1.5px solid ${selected};
  border-radius: 3px;
  cursor: pointer;
  padding: 0.5rem;
  margin-bottom: 1rem!important;
  &:hover {
    border: 1.5px solid ${primary};
  }
`;


const CareerItem = ({ career, onClick, selected }) => (
  <StyledLevel onClick={onClick} selected={selected}>
    <div className="level-left">
      <div className="level-item">
        <div>
          <p className="heading">{career.utitle}</p>
          <p className="title is-5">{career.ctitle}</p>
        </div>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Ponderaciones</p>
          <p className="title is-4 has-text-info">{career.count}</p>
        </div>
      </div>
    </div>
  </StyledLevel>
);

export default CareerItem;

