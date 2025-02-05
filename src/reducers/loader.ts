import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { actions } from 'src/actions';

export type State = true | null;

const initialState: State = null;

const reducer = reducerWithInitialState<State>(initialState)
  .case(actions.ui.loader.hide, (): State => null)
  .case(actions.ui.loader.show, (): State => true);

export const loader = { initialState, reducer };
