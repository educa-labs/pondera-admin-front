import React from 'react';
import afterTyping from '../hoc/afterTyping';


const SearchInput = ({ value, onChange }) => (
  <div className="panel-block">
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
  </div>
);

export default afterTyping(SearchInput);

