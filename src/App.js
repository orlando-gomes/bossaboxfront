import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';

import './config/ReactotronConfig';
import Routes from '~/routes';
import { store, persistor } from './store';
import history from '~/services/history';

import GlobalStyle from '~/styles/global';

function App() {
  const GlobalStyleWithRouter = withRouter((props) => (
    <GlobalStyle {...props} />
  ));

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter history={history}>
          <Routes />
          <GlobalStyleWithRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

/*
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';
import history from '~/services/history';

import GlobalStyle from '~/styles/global';
import Header from '~/components/Header';
import Routes from '~/routes';
import { store, persistor } from './store';

function App() {
  const HeaderWithRouter = withRouter((props) => <Header {...props} />);
  const GlobalStyleWithRouter = withRouter((props) => (
    <GlobalStyle {...props} />
  ));

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter history={history}>
          <HeaderWithRouter />
          <GlobalStyleWithRouter />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
*/

/*
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';
import history from '~/services/history';
import Routes from '~/routes';
import { store, persistor } from './store';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
*/
