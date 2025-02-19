import actionsFactory from 'typescript-fsa-factory';

import { ENDPOINTS, Endpoints } from 'src/constants/api';

export type ActionCreatorAsync = ReturnType<
  typeof actionCreatorAsyncWithHandler
>;

export const {
  actionCreator,
  actionCreatorAsyncWithHandler,
  registerAsyncActions,
} = actionsFactory<Endpoints, { hideErrorNotification?: boolean }>(ENDPOINTS, {
  withCredentials: true,
});
