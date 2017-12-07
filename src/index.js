import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App/App.jsx';
import store from './redux/configureStore';
import './index.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}


render(App);

if (module.hot) {
  module.hot.accept('./containers/App/App.jsx', () => {
    const NextApp = require('./containers/App/App.jsx').default;
    render(NextApp);
  });
}

