import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { IntlProvider } from 'src/i18n/IntlProvider';
import { persistor, store } from 'src/utils/store';

type Props = {
  children: ReactNode;
};

export const Provider: React.FC<Props> = ({ children }) => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider>{children}</IntlProvider>
    </PersistGate>
  </ReduxProvider>
);
