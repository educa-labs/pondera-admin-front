import React from 'react';

const Layout = ({ children }) => (
  <section className="section">
    <div className="container is-fluid">
      <div className="columns">
        <div className="column">
          {children[0]}
        </div>
        <div className="column is-6">
          {children[1]}
        </div>
        <div className="column">
          {children[2]}
        </div>
      </div>
    </div>
  </section>
);

export default Layout;
