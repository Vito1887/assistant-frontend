import React, { ReactNode, useLayoutEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';

import { pages } from 'src/components/routes';
import { templateToComponent } from 'src/components/templates';
import { Template, TemplateProps } from 'src/components/templates/types';
import { PAGES } from 'src/constants/navigation';
import { Msg, msg } from 'src/i18n/Msg';
import { useRouteMatch } from 'src/navigation/useRouteMatch';

type Props = {
  back?: TemplateProps['back'];
  children: ReactNode;
  template: Template;
  title?: string | true;
};

export const Page: React.FC<Props> = ({ back, children, template, title }) => {
  const intl = useIntl();
  const path = useRouteMatch();

  const { title: id } = pages[path as PAGES] || {};
  const msgProps = useMemo(() => (id ? { id } : undefined), [id]);

  useLayoutEffect(() => {
    document.title =
      title && typeof title !== 'boolean'
        ? title
        : msg(intl, msgProps || { id: 'components.organisms.Page.title' });
  }, [title, msgProps, intl]);

  let renderedTitle = null;

  if (title) {
    if (typeof title !== 'boolean') {
      renderedTitle = <>{title}</>;
    } else if (msgProps) {
      renderedTitle = <Msg {...msgProps} />;
    }
  }

  const TemplateComponent = templateToComponent[template];

  return (
    <TemplateComponent title={renderedTitle} back={back}>
      {children}
    </TemplateComponent>
  );
};
