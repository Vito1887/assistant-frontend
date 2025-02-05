import React from 'react';

import { Provider } from 'src/components/providers/Provider';
import { Loader } from 'src/navigation/Loader';
import { Router } from 'src/navigation/Router';

export const App: React.FC = () => (
  <Provider>
    <div className="app" data-testid="page">
      <Router />
      <Loader />
    </div>
  </Provider>
);
