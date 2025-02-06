import { put, takeEvery } from 'redux-saga/effects';

import { actions } from 'src/actions';

function* showLoader() {
  yield put(actions.ui.loader.show());
}

function* hideLoader() {
  yield put(actions.ui.loader.hide());
}

export function* loaderSaga(): Generator {
  yield takeEvery([actions.api.user.getUser.started.type], showLoader);
  yield takeEvery(
    [actions.api.user.getUser.done.type, actions.api.user.getUser.failed.type],
    hideLoader
  );
}
