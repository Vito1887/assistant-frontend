import React, { lazy } from 'react';

import { PAGES } from 'src/constants/navigation';
import { DictionaryKey } from 'src/i18n';

export type AuthMode = 'authorized' | 'unauthorized';

export const pagesRedirect: Record<AuthMode, PAGES> = {
  authorized: PAGES.MAIN,
  unauthorized: PAGES.ERROR_404,
};

export type PageRoute = {
  access: 'all' | AuthMode;
  title: DictionaryKey;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>;
};

export const pages: Record<PAGES, PageRoute> = {
  [PAGES.MAIN]: {
    access: 'all',
    title: 'components.routes.pages.Main.title',
    component: lazy(() => import('src/components/routes/pages/Main')),
  },
  // [PAGES.CALENDAR]: {
  //   access: 'all',
  //   title: 'components.routes.pages.User.title',
  //   component: lazy(() => import('src/components/routes/pages/User')),
  // },
  // [PAGES.USER]: {
  //   access: 'all',
  //   title: 'components.routes.pages.User.title',
  //   component: lazy(() => import('src/components/routes/pages/User')),
  // },

  [PAGES.ERROR_404]: {
    access: 'all',
    title: 'components.routes.pages.Error404.title',
    component: lazy(() => import('src/components/routes/pages/Error404')),
  },
};
