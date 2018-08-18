import type { Node } from 'react';

import { connect } from 'react-redux';
import { Layout } from '../components/layout';

const mapStateToProps
  : () => { title: Node }
  = () => ({ title: 'Welcome to React + Redux!' });

export const LayoutContainer = connect(mapStateToProps)(Layout);
