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
  { id: 1, title: 'Ingenieria', uTitle: 'Pontificia Universidad Catolica', count: 1052 },
  { id: 2, title: 'Universidad Central ', count: 1052 },
  { id: 3, title: 'Universidad Gabriela Mistral', count: 1052 },
  { id: 4, title: 'Ingenieria', uTitle: 'Pontificia Universidad Catolica', count: 1052 },
  { id: 5, title: 'Universidad Central ', count: 1052 },
  { id: 6, title: 'Universidad Gabriela Mistral', count: 1052 },
  { id: 7, title: 'Ingenieria', uTitle: 'Pontificia Universidad Catolica', count: 1052 },
  { id: 8, title: 'Universidad Central ', count: 1052 },
  { id: 9, title: 'Universidad Gabriela Mistral', count: 1052 },
  { id: 10, title: 'Ingenieria', uTitle: 'Pontificia Universidad Catolica', count: 1052 },
  { id: 11, title: 'Universidad Central ', count: 1052 },
  { id: 12, title: 'Universidad Gabriela Mistral', count: 1052 },
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
