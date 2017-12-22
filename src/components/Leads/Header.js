import React from 'react';
import Card from '../../styled/Card';

const Header = ({ count, selectedCareers, userCount }) => (
  <Card>
    <div className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">leads</p>
          <p className="title">{count || 0}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Carreras</p>
          <p className="title">{selectedCareers ? selectedCareers.length : 0}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Registros</p>
          <p className="title">{userCount || 0}</p>
        </div>
      </div>
    </div>
  </Card>
);

export default Header;
