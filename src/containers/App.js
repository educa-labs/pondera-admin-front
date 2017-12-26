import React, { Fragment, Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Login from './Login';
import Leads from './Leads';
// import Summary from './Summary';
import SideMenu from '../components/SideMenu/SideMenu';
import NavBar from '../components/NavigationBar';
import Container from '../components/Layout/MainContainer';


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
