import { combineReducers } from 'redux';

import { State as StateLoader, loader } from 'src/reducers/loader';
import { State as StateModals, modals } from 'src/reducers/modals';
import { State as StateUser, user } from 'src/reducers/user';

export interface ReduxState {
  user: StateUser;
  loader: StateLoader;
  modals: StateModals;
}

export const initialState = {
  user: user.initialState,
  loader: loader.initialState,
  modals: modals.initialState,
};

export const rootReducer = combineReducers<ReduxState>({
  user: user.reducer,
  loader: loader.reducer,
  modals: modals.reducer,
});
