import React, { Fragment, Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
//import NavBar from '../components/Navigation/NavBar';
// import Layout from '../components/Layaout';
// import UniversityPanel from '../components/Univs/UniversityPanel';
// import CareerPanel from '../components/Careers/CareerPanel';
import Login from './Login';
import Leads from './Leads';
import Signup from './Signup';
import SideMenu from '../components/SideMenu/SideMenu';
import NavBar from '../components/NavigationBar';
import Container from '../components/Layout/Container';

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

const theme = {
  colors: {
    primary: '#FFA000',
    secondary: '#0091D5',
    textColor: '#303030',
    textLight: '#7E909A',
    grey: '#F1F1F1',
    danger: '#EA6A47',
    accent: '#A5D8DD',
    white: '#FFFFFF',
  },
};

const toggleOpen = state => ({
  open: !state.open,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <NavBar toggleSideMenu={() => this.setState(toggleOpen)} />
            <SideMenu open={this.state.open} />
            <Container open={this.state.open}>
              <Switch>
                <Route path="/leads" component={Leads} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Login} />
              </Switch>
            </Container>
          </Fragment>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
