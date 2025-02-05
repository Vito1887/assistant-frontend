import React from 'react';
import { useIntl } from 'react-intl';

import { PageWrapper } from 'src/components/atoms/PageWrapper';
import { ArrowTopBar } from 'src/components/atoms/icons/ArrowTopBar';
import { TemplateProps } from 'src/components/templates/types';
import { msg } from 'src/i18n/Msg';
import { Link } from 'src/navigation/Link';

import styles from './styles.module.css';

export const WithHeader: React.FC<TemplateProps> = ({
  children,
  title,
  back,
}) => {
  const intl = useIntl();

  const alt = msg(intl, { id: 'components.templates.WithHeader.goBack' });

  return (
    <PageWrapper>
      <div className={styles.headContainer}>
        {back && (
          <div className={styles.headRow}>
            <Link url={back}>
              <ArrowTopBar />
              <p className="text-style-thick">{alt}</p>
            </Link>
          </div>
        )}

        <h1 className="pageTitle">{title}</h1>
      </div>

      {children}
    </PageWrapper>
  );
};
