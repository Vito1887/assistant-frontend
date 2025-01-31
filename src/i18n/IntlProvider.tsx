import React, { ReactNode } from 'react';
import { IntlProvider as Provider } from 'react-intl';
import { useSelector } from 'react-redux';

import { defaultLocale, locales } from 'src/i18n';
import { ReduxState } from 'src/reducers';

type Props = {
  children: ReactNode;
};

export const IntlProvider: React.FC<Props> = ({ children }) => {
  const { locale } = useSelector((state: ReduxState) => state.user.geoInfo);

  return (
    <Provider
      defaultLocale={defaultLocale}
      key={locale}
      locale={locale}
      messages={locales[locale].dictionary}
      textComponent={React.Fragment}
    >
      {children}
    </Provider>
  );
};
