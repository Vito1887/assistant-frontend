import { Store, applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from 'redux-persist/lib/storage';
import createSagaMiddleware, { END, Saga, Task } from 'redux-saga';

import { APP_VERSION } from 'src/constants/env';
import { ReduxState, initialState, rootReducer } from 'src/reducers';
import { rootSaga } from 'src/sagas';

interface IExtendedStore extends Store<ReduxState> {
  runSaga?: <S extends Saga>(saga: S, ...args: Parameters<S>) => Task;
  close?: () => void;
}

const persistConfig = {
  key: APP_VERSION,
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

export const store = createStore(
  persistedReducer,
  initialState,
  enhancer
) as IExtendedStore;

store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);
store.runSaga(rootSaga);

export const persistor = persistStore(store);
