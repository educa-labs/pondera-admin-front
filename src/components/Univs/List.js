import React, { Fragment } from 'react';
import is from 'is_js';

const ListItem = ({ label, selected, onClick }) => (
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

const List = ({ univs, selections, onItemClick }) => (
  <Fragment>
    {univs.map(univ => (
      <ListItem
        key={univ.id}
        label={univ.title}
        selected={is.inArray(univ.id, selections)}
        onClick={() => onItemClick(univ.id)}
      />
    ))}
  </Fragment>
)

export default List;
