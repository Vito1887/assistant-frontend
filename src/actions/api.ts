import { ENDPOINTS } from 'src/constants/api';
import { Actions } from 'src/types';
import { actionCreatorAsyncWithHandler } from 'src/utils/factories';

export const user = {
  getUser: actionCreatorAsyncWithHandler<
    Actions.api.user.getUser.started,
    Actions.api.user.getUser.done
  >({
    url: ENDPOINTS.USER_GET_USER,
    method: 'GET',
    extra: {
      hideErrorNotification: true,
    },
  }),
};
