import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

const primary = props => props.theme.colors.primary;
const grey = props => props.theme.colors.grey;
const white = props => props.theme.colors.white;

const selectedMixin = css`
  background-color: ${primary};
  color: ${white};
  &:hover {
    background-color: ${primary};
    color: ${white};
    opacity: 0.9
  }
`;

const defaultMixin = css`
  &:hover {
    color: ${primary};
    background-color: ${grey}
  }
`;

const mixin = props => (
  props.active ? selectedMixin : defaultMixin
);

const Label = styled.div`
  cursor: pointer;
  margin: 5px 0.5rem;
  padding: 5px 1rem;
  border-radius: 3px;
  ${mixin}
`;

const MenuItem = ({
  linkTo, active, children, location, href
}) => {
  const labelEl = (
    <Label active={location.pathname === linkTo}>
      {children}
    </Label>
  );
  if (linkTo) {
    return (
      <Link to={linkTo || '#'}>
        {labelEl}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href}>
        {labelEl}
      </a>
    );
  }
  return labelEl;
};

export default withRouter(MenuItem);
