import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ total }) => (
  <nav className="">
    <div className="container is-fluid">
      <div className="columns">
        <div className="column">
          <a href="https://bulma.io">
            Pondera
          </a>
        </div>
        <div className="column is-6">
          <SearchBar />
        </div>
        <div className="column">
          <a className="button is-primary">Exportar CSV</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
