import type { AppStore } from './reducers/store';

import React from 'react';
import { Provider } from 'react-redux';
import { LayoutContainer } from './containers/layout.container';

import logo from './logo.svg';

export type AppProps = { store: AppStore }

export class App extends React.Component<AppProps> {
  render () {
    return (
      <Provider store={ this.props.store }>
        <LayoutContainer logo={ logo } />
      </Provider>
    );
  }
}
