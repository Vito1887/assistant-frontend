import { combineReducers } from 'redux';

import { State as StateUser, user } from 'src/reducers/user';

export interface ReduxState {
  user: StateUser;
}

export const initialState = {
  user: user.initialState,
};

export const rootReducer = combineReducers<ReduxState>({
  user: user.reducer,
});
