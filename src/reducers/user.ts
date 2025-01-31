import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { actions } from 'src/actions';
import { defaultLocale } from 'src/i18n';
import { GeoInfo, User } from 'src/types';

export type State = {
  data?: User;
  geoInfo: GeoInfo;
};

const initialState: State = {
  data: undefined,
  geoInfo: {
    locale: defaultLocale,
  },
};

const reducer = reducerWithInitialState<State>(initialState)
  .case(
    actions.api.user.getUser.done,
    (state, payload): State => ({
      ...state,
      data: { ...payload.result.data },
    })
  )
  .case(
    actions.ui.geoInfo.set,
    (state, { info }): State => ({
      ...state,
      geoInfo: info,
    })
  );

export const user = { initialState, reducer };
