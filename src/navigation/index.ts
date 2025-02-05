import { generatePath } from 'react-router-dom';

import {
  AuthMode,
  PageRoute,
  pages as pagesConfig,
} from 'src/components/routes';
import { PAGES } from 'src/constants/navigation';
import { history } from 'src/navigation/store';
import { Scheme } from 'src/types';

type Route = PageRoute;

type RouteWithScheme = Route & { scheme: PAGES };
type Routes = { [TKey in AuthMode]: string[] };

export type SwitchMode = {
  mode: AuthMode;
};

const allRoutes = (config: Record<string, Route>): RouteWithScheme[] =>
  Object.keys(config).map(
    (scheme: string) => ({ scheme, ...config[scheme] }) as never
  );

const filterConfig = (list: RouteWithScheme[], access: AuthMode): string[] =>
  list
    .filter((item) => item.access === access || item.access === 'all')
    .map((item) => item.scheme);

const createRoutes = (): Routes => {
  const list = allRoutes(pagesConfig);

  return {
    authorized: filterConfig(list, 'authorized'),
    unauthorized: filterConfig(list, 'unauthorized'),
  };
};

export const allPages: PAGES[] = allRoutes(pagesConfig).map(
  (item) => item.scheme
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) as any;
export const allowedPages: Routes = createRoutes();

export const redirect = (url: Scheme): void => {
  const to = generatePath(url.scheme, url.params as never);

  if (to) {
    history.replace(to, {});
  }
};
