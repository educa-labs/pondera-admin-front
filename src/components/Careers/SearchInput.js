import React from 'react';
import styled from 'styled-components';
import afterTyping from 'react-after-typing';
import Card from '../../styled/Card';

const Row = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: .5em;
  }
`;

const input = ({ className, ...rest }) => (
  <div className={`control is-expanded ${className}`}>
    <input
      {...rest}
      className="input is-primary"
      type="text"
      placeholder="Ingeniería"
    />
  </div>
);

const Input = afterTyping(input);

const StyledInput = styled(Input)`
  flex: 1;
`;

const SearchInput = props => (
  <Card>
    <Row>
      <span>Encuentra una carrera como</span>
      <StyledInput {...props} />
    </Row>
  </Card>
);

export default SearchInput;
