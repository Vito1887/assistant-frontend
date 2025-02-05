import { combineReducers } from 'redux';

import { State as StateLoader, loader } from 'src/reducers/loader';
import { State as StateUser, user } from 'src/reducers/user';

export interface ReduxState {
  user: StateUser;
  loader: StateLoader;
}

export const initialState = {
  user: user.initialState,
  loader: loader.initialState,
};

export const rootReducer = combineReducers<ReduxState>({
  user: user.reducer,
  loader: loader.reducer,
});
