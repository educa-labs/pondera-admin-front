import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import Layout from '../components/Layaout';
import UniversityPanel from '../components/Univs/UniversityPanel';

const App = () => (
  <Fragment>
    <NavBar total={10} />
    <Layout>
      <div>Hola</div>
      <div>Chao</div>
      <UniversityPanel />
    </Layout>
  </Fragment>
);

export default App;
