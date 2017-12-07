import React from 'react';

const Navbar = () => (
  <nav className="navbar" role="navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        Pondera
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <a class="button is-primary">Exportar CSV</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;