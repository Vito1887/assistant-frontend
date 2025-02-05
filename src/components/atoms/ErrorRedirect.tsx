import React from 'react';

import { PAGES } from 'src/constants/navigation';
import { useRedirect } from 'src/navigation/useRedirect';

export const ErrorRedirect: React.FC = () => {
  const redirect = useRedirect();

  redirect({ scheme: PAGES.ERROR_404 });

  return null;
};
