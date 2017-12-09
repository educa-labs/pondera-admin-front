import React, { Fragment } from 'react';
import NavBar from '../components/Navigation/NavBar';
import Layout from '../components/Layaout';
import UniversityPanel from '../components/Univs/UniversityPanel';
import CareerPanel from '../components/Careers/CareerPanel';

const univs = [
  { id: 1, title: 'PUC' },
  { id: 2, title: 'Universidad Central ' },
  { id: 3, title: 'Universidad Gabriela Mistral' },
];

const careers = [
  { id: 1, title: 'PUC' },
  { id: 2, title: 'Universidad Central ' },
  { id: 3, title: 'Universidad Gabriela Mistral' },
  { id: 4, title: 'PUC' },
  { id: 5, title: 'Universidad Central ' },
  { id: 6, title: 'Universidad Gabriela Mistral' },
  { id: 7, title: 'PUC' },
  { id: 8, title: 'Universidad Central ' },
  { id: 9, title: 'Universidad Gabriela Mistral' },
  { id: 10, title: 'PUC' },
  { id: 11, title: 'Universidad Central ' },
  { id: 12, title: 'Universidad Gabriela Mistral' },
];

const App = () => (
  <Fragment>
    <NavBar total={10} />
    <Layout>
      <div>Hola</div>
      <CareerPanel careers={careers} />
      <UniversityPanel univs={univs} />
    </Layout>
  </Fragment>
);

export default App;
