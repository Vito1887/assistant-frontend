import React from 'react';
import { Link as RouterLink, generatePath } from 'react-router-dom';

import { Scheme } from 'src/types';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: Scheme;
}

export const Link: React.FC<Props> = (props) => {
  const to = generatePath(props.url.scheme, props.url.params as never);

  if (!to) {
    return null;
  }

  const newProps = {
    ...props,
    url: undefined,
  };

  return (
    <RouterLink to={to} {...newProps}>
      {props.children}
    </RouterLink>
  );
};
