import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  withFixedHeader?: boolean;
  children?: React.ReactNode;
};

export const PageWrapper: React.FC<Props> = ({ withFixedHeader, children }) => (
  <div
    className={classNames(styles.pageWrapper, {
      [styles.withFixedHeader]: withFixedHeader,
    })}
  >
    {children}
  </div>
);
