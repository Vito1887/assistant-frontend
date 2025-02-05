import React from 'react';

import { PageWrapper } from 'src/components/atoms/PageWrapper';
import { TemplateProps } from 'src/components/templates/types';

export const Entry: React.FC<TemplateProps> = ({ children }) => (
  <PageWrapper>{children}</PageWrapper>
);
