import React, { Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Preloader } from 'src/components/atoms/Preloader';
import { pages, pagesRedirect } from 'src/components/routes';
import { PAGES } from 'src/constants/navigation';
import { SwitchMode, allPages, allowedPages } from 'src/navigation';

const AuthGate: React.FC<SwitchMode & { scheme: PAGES }> = ({
  mode,
  scheme,
}) => {
  if (!allowedPages[mode].includes(scheme)) {
    return <Navigate replace to={pagesRedirect[mode]} />;
  }

  const Component = pages[scheme].component;
  return <Component />;
};

export const PagesSwitch: React.FC<SwitchMode> = ({ mode }) => {
  const location = useLocation();

  return (
    <Suspense fallback={<Preloader />}>
      <Routes
        location={{
          ...location,
          pathname: location.pathname.split('/~/')[0],
        }}
      >
        {allPages.map((scheme) => (
          <Route
            key={scheme}
            path={scheme}
            element={<AuthGate mode={mode} scheme={scheme} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
