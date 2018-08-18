import type { Node } from 'react';

import React from 'react';

import './layout.css';

export type LayoutProps = {
  logo: any,
  title: Node,
  message: Node
}

const defaultProps = {
  message: <React.Fragment>To get started, edit <code>src/App.js</code> and save to reload.</React.Fragment>
}

export function Layout ({ logo, title, message }: LayoutProps) {
  return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">{ title }</h1>
        </header>
        <p className="App-intro">{ message }</p>
      </div>
  );
}

Layout.defaultProps = defaultProps;
