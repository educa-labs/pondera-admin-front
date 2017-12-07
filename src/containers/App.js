import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import Layout from '../components/Layaout';
import UniversityPanel from '../components/Univs/UniversityPanel';

const univs = [
  { id: 1, title: 'PUC' },
  { id: 2, title: 'Universidad Central ' },
  { id: 3, title: 'Universidad Gabriela Mistral' },
]

const App = () => (
  <Fragment>
    <NavBar total={10} />
    <Layout>
      <div>Hola</div>
      <div>Chao</div>
      <UniversityPanel univs={univs} />
    </Layout>
  </Fragment>
);

export default App;
