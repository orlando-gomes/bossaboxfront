import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';

import './config/ReactotronConfig';
import Routes from '~/routes';
import { store, persistor } from './store';

import GlobalStyle from '~/styles/global';

function App() {
  const GlobalStyleWithRouter = withRouter((props) => (
    <GlobalStyle {...props} />
  ));

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
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
*/
