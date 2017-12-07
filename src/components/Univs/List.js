import React, { Fragment } from 'react';
import is from 'is_js';

const ListItem = ({ univ, selected }) => (
  <a className={`panel-block ${selected ? 'is-active' : ''}`}>
    <span className="panel-icon">
      <i className={`fa fa-circle${selected ? '' : '-o'}`}></i>
    </span>
    {univ.title}
  </a>
);

const List = ({ univs, selections }) => (
  <Fragment>
    {univs.map(univ => (
      <ListItem
        key={univ.id}
        univ={univ}
        selected={is.inArray(univ.id, selections)}
      />
    ))}
  </Fragment>
)

export default List;
