import React from 'react';
import styled, { css } from 'styled-components';

const selected = ({ selected }) => (
  selected ? css`
  span {
    color: #3273dc;
  }
  ` : null
);

const PanelBlock = styled.a`
  align-items: center;
  color: #363636;
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0.75em;
  ${selected}
`;


const UnivItem = ({ label, selected, onClick }) => (
  <PanelBlock
    selected
    onClick={onClick}
  >
    <span className="panel-icon">
      <i className={`fa fa-circle${selected ? '' : '-o'}`}></i>
    </span>
    {label}
  </PanelBlock>
);

export default UnivItem;
