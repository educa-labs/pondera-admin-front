import React from 'react';
import styled from 'styled-components';
import afterTyping from 'react-after-typing';

const Div = styled.div`
  margin: 5px 0;
`;


const SearchInput = ({ value, onChange }) => (
  <Div>
    <p className="control has-icons-left">
      <input
        onChange={onChange}
        value={value}
        className="input"
        type="text"
        placeholder="Busca una universidad"
      />
      <span className="icon is-left">
        <i className="fa fa-search" />
      </span>
    </p>
  </Div>
);

export default afterTyping(SearchInput);

