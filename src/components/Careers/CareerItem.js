import React from 'react';

const CareerItem = ({ career }) => (
  <div className="box">
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <a className="button is-primary is-outlined">Agregar</a>
        </div>
        <div className="level-item">
          <div>
            <p className="heading">{career.uTitle}</p>
            <p className="title is-5">{career.title}</p>
          </div>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <div>
            <p className="heading">Leads</p>
            <p className="title is-4 has-text-info">{career.count}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CareerItem;

