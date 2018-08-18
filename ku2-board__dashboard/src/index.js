import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { getStore } from './reducers/store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const element = document.getElementById('root');
const store = getStore();
const app = <App store={ store } />

if (element == null) window.alert('Missing root element!');
else {
  ReactDOM.render(app, element);
  registerServiceWorker();
}
