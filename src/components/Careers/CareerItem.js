import React from 'react';

const CareerItem = ({ career, onClick, selected }) => (
  <div className={`box box-hoverable ${selected ? 'box-selected' : ''}`}>
    <div className="level" onClick={onClick}>
      <div className="level-left">
        {/* <div className="level-item">
          <a onClick={onClick} className="button is-primary is-outlined">Agregar</a>
        </div> */}
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

