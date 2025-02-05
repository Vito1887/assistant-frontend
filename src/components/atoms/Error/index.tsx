import React from 'react';

import { Msg } from 'src/i18n/Msg';

import styles from './styles.module.css';

type Props = {
  error?: string;
};

export const Error: React.FC<Props> = ({ error }) =>
  error ? (
    <p className={styles.errorText}>
      <Msg id={error as never} />
    </p>
  ) : null;
