import React from 'react';

import { Page } from 'src/components/organisms/Page';
import { PAGES } from 'src/constants/navigation';
import { Link } from 'src/navigation/Link';

const Main: React.FC = () => (
  <Page template="entry">
    Example:
    <Link url={{ scheme: PAGES.USER, params: { orderUID: 'user' } }}>
      UserPage
    </Link>
  </Page>
);

export default Main;
