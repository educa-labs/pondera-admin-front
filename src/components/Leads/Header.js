import React from 'react';
import Card from '../../styled/Card';

const Header = ({ count, leadsCount, userCount }) => (
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
          <p className="heading">Ponderaciones</p>
          <p className="title">{leadsCount}</p>
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
