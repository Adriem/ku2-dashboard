import type { Store } from 'redux';
import type { AppAction } from '../actions/types';
import type { RootState } from './root.reducer';

import { createStore } from 'redux';
import rootReducer from './root.reducer';

export type AppStore = Store<RootState, AppAction>

let _store: ?AppStore

/** Get the store instance for the application */
export function getStore (): AppStore {
  if (_store == null) initializeStore();

  if (_store == null) throw new Error('Could not initialize store');
  else return _store;
}

function initializeStore () {
  _store = createStore(rootReducer);
}
