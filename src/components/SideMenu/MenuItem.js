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

const MenuItem = styled.div`
  cursor: pointer;
  margin: 5px 0.5rem;
  padding: 5px 1rem;
  border-radius: 3px;
  a {
    color: inherit;
  }
  ${mixin}
`;

export default MenuItem;
