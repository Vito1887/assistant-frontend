import { generatePath, useNavigate } from 'react-router-dom';

import { Scheme } from 'src/types';

export const useRedirect = () => {
  const navigate = useNavigate();

  return (to: Scheme) => {
    const generated = generatePath(to.scheme, to.params as never);

    if (to) {
      navigate(generated, { replace: true });
    }
  };
};
