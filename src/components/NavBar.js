import React from 'react';

const Navbar = ({ total }) => (
  <nav className="navbar" role="navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        Pondera
      </a>
      <div className="navbar-item">
        <div className="has-text-info has-text-weight-semibold">
          Total: {total}
        </div>
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <a className="button is-primary">Exportar CSV</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;