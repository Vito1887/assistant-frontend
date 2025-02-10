import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'src/components/providers/Provider';

import 'src/styles/storybook.css';

export const decorators: Meta['decorators'] = [
  (Story) => (
    <Provider>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </Provider>
  ),
];
