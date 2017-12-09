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
  {
    id: 1,
    title: 'Ingenieria Civil',
    uTitle: 'Pontificia Universidad Catolica',
    count: 1052,
    uId: 1,
  },
  {
    id: 2,
    title: 'Derecho',
    uTitle: 'Universidad Central',
    count: 1052,
    uId: 2,
  },
  {
    id: 3,
    title: 'Administracion Publica',
    count: 120,
    uId: 3,
  },
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
