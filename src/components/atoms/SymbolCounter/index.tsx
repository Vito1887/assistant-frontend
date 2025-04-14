import React from 'react';

import styles from './styles.module.css';

type Props = {
  value: number;
  maxLength: number;
};

export const SymbolCounter: React.FC<Props> = ({ value, maxLength }) => (
  <p className={styles.counter}>
    {value}/{maxLength}
  </p>
);
