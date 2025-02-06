import { AllEffect, CallEffect, all, call } from 'redux-saga/effects';

import { ajaxSaga } from 'src/sagas/ajax';
import { loaderSaga } from 'src/sagas/loader';

const sagas = [ajaxSaga, loaderSaga];

export function* rootSaga(): Generator<AllEffect<CallEffect<unknown>>, void> {
  yield all(sagas.map((saga) => call(saga)));
}
