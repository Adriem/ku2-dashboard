import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { getStore } from './reducers/store';

const mockStore = getStore();

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App store={ mockStore } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
