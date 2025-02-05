import React from 'react';

import { Entry } from 'src/components/templates/Entry';
import { WithHeader } from 'src/components/templates/WithHeader';
import { Template, TemplateProps } from 'src/components/templates/types';

export const templateToComponent: Record<Template, React.FC<TemplateProps>> = {
  entry: Entry,
  withHeader: WithHeader,
};
