import React, { Component } from 'react';
import styled from 'styled-components';
import afterTyping from 'react-after-typing';
import { setFilterValue } from '../../redux/query';
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

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { dispatch, ...rest} = this.props;
    const { value } = this.state;
    return (
      <Card>
        <Row>
          <span>Encuentra una carrera como</span>
          <StyledInput
            {...rest}
            onChange={(ev) => { this.setState({ value: ev.target.value })}}
            value={value}
            afterTyping={() => {
              dispatch(setFilterValue(value));
            }}
          />
        </Row>
      </Card>
    );
  }
}

export default SearchInput;
