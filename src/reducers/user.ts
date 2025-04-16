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
  )
  .case(actions.ui.userInfo.set, (state, payload) => ({
    ...state,
    data: {
      ...state,
      name: payload.name,
      surname: payload.surname,
      specialization: payload.specialization,
      phone: payload.phone,
      mail: payload.mail,
      telegram: payload.telegram,
      vkontakte: payload.vkontakte,
      city: payload.city,
      address: payload.address,
      notes: payload.address,
    },
  }));

export const user = { initialState, reducer };
