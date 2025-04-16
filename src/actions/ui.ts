import { Modals } from 'src/components/routes/modals';
import { Actions } from 'src/types';
import { actionCreator } from 'src/utils/factories';

export const userInfo = {
  set: actionCreator<Actions.ui.userInfo.set>('USER_INFO_SET'),
};

export const geoInfo = {
  set: actionCreator<Actions.ui.geoInfo.set>('GEO_INFO_SET'),
};

export const loader = {
  show: actionCreator<Actions.ui.loader.show>('UI_LOADER_SHOW'),
  hide: actionCreator<Actions.ui.loader.hide>('UI_LOADER_HIDE'),
};

export const redirects = {
  redirectWithoutParams:
    actionCreator<Actions.ui.redirect.redirectWithoutParams>(
      'UI_REDIRECTS_REDIRECT_WITHOUT_PARAMS'
    ),
};

export const modal = {
  show: actionCreator<Actions.ui.modal.show<Modals>>('UI_MODAL_SHOW'),
  hide: actionCreator<Actions.ui.modal.hide>('UI_MODAL_HIDE'),
};
