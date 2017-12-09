import React from 'react';

const UnivItem = ({ label, selected, onClick }) => (
  <a
    className={`panel-block ${selected ? 'is-active' : ''}`}
    onClick={onClick}
  >
    <span className="panel-icon">
      <i className={`fa fa-circle${selected ? '' : '-o'}`}></i>
    </span>
    {label}
  </a>
);

export default UnivItem;
