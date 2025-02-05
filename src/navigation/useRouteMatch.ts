import { matchRoutes, useLocation } from 'react-router-dom';

import { PAGES, routes } from 'src/constants/navigation';

export const useRouteMatch = () => {
  const location = useLocation();

  const results =
    matchRoutes(routes, {
      ...location,
      pathname: location.pathname.split('/~/')[0],
    }) || [];

  return results[0]?.route?.path as PAGES | undefined;
};
