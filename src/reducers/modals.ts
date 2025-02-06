import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { actions } from 'src/actions';
import { Modals } from 'src/components/routes/modals';

export type State = Modals | null;

const initialState: State = null;

const reducer = reducerWithInitialState<State>(initialState)
  .case(actions.ui.modal.hide, (): State => null)
  .case(actions.ui.modal.show, (_, payload): State => payload);

export const modals = { initialState, reducer };
