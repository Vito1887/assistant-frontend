import { Update } from 'history';
import React, { useLayoutEffect, useReducer } from 'react';
import { Router as BrowserRouter } from 'react-router-dom';

import { Preloader } from 'src/components/atoms/Preloader';
import { PagesSwitch } from 'src/navigation/Switch';
import { history } from 'src/navigation/store';

const reducer = (_: Update, action: Update) => action;

export const Router: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    const unlisten = history.listen(dispatch);

    return () => {
      unlisten();
    };
  }, []);

  const isLoggedIn: null | boolean = false; // TODO: get from state

  if (isLoggedIn === null) {
    return <Preloader />;
  }

  const mode = isLoggedIn ? 'authorized' : 'unauthorized';

  return (
    <BrowserRouter
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      <PagesSwitch mode={mode} />
    </BrowserRouter>
  );
};
