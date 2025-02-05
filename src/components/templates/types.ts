import React, { ReactNode } from 'react';

import { Scheme } from 'src/types';

export type Template = 'entry' | 'withHeader';

export type TemplateProps = {
  title: React.ReactNode | null;
  back?: Scheme;
  children: ReactNode;
};
