import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import App from './App';
import './index.css';
import * as WebFontLoader from 'webfontloader';

import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer);

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);