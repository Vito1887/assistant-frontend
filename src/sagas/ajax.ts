/* eslint-disable @typescript-eslint/no-explicit-any */
import { generatePath } from 'react-router-dom';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';

import { actions } from 'src/actions';
import { registerAsyncActions } from 'src/utils/factories';
import { getAPIUrl, makeFormData } from 'src/utils/lib';

const { events, eventsToActionCreators } = registerAsyncActions(actions.api);
const baseURL = getAPIUrl('https');

function* ajaxGenerator(action: Action<any>): Generator {
  const actionCreator = eventsToActionCreators[action.type];
  const params = action.payload;

  const patchedParams = { ...params, extra: undefined };

  const isFileUpload =
    actionCreator.options &&
    actionCreator.options.headers &&
    actionCreator.options.headers['Content-Type'] === 'multipart/form-data';

  try {
    const response: any = yield call(
      actionCreator.handler,
      isFileUpload ? makeFormData(patchedParams) : patchedParams,
      {
        baseURL,
        url: generatePath(actionCreator.options.url, params?.extra),
      }
    );

    yield put(
      actionCreator.done({
        params,
        result: response.data,
      })
    );
  } catch (rawError: any) {
    const data = rawError?.response?.data;
    const apiError = data?.error || data?.message || data;

    const error = apiError || 'Unknown Error';

    console.error(error);

    yield put(actionCreator.failed({ params, error }));
  }
}

export function* ajaxSaga(): Generator {
  yield takeEvery(events, ajaxGenerator);
}
