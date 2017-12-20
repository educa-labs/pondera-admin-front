import React from 'react';
import styled, { css } from 'styled-components';


const accent = props => props.theme.colors.accent;
const selected = ({ selected, ...props }) => (
  selected ? css`
  span {
    color: ${accent};
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
  &: hover {
    background: #F5F5F5;
  }
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
