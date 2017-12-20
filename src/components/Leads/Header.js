import React from 'react';
import Card from '../../styled/Card';
import { Title } from '../../styled/Text';

const Header = ({ count, selectedCareers }) => (
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
    </div>
  </Card>
);

export default Header;
