import React from 'react';
import afterTyping from 'react-after-typing';

const SearchBar = ({ onChange, value}) => (
  <div className="field has-addons">
    <div className="control is-expanded has-icons-left">
      <input
        onChange={onChange}
        value={value}
        className="input"
        type="text"
        placeholder="Encuentra una carrera"
      />
      <span className="icon is-left">
        <i className="fa fa-search" />
      </span>
    </div>
    <div className="control">
      <a className="button is-info">
        Buscar
      </a>
    </div>
  </div>
);

export default afterTyping(SearchBar);

