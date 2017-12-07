import React from 'react';

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
        <i className="fa fa-search"></i>
      </span>
    </p>
  </div>
);

export default SearchInput;

