import React from 'react';
import Card from '../../styled/Card';
import { Title } from '../../styled/Text';

const Header = ({ count }) => (
  <Card>
    <div className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">leads</p>
          <p className="title">3,456</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Carreras</p>
          <p className="title">3</p>
        </div>
      </div>
    </div>
  </Card>
);

export default Header;
