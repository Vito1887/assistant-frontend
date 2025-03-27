import React from 'react';

import { TimePill } from 'src/components/atoms/TimePill';
import { Time } from 'src/types';

import styles from './styles.module.css';

type Props = {
  visits?: Time[];
};

export const PillList: React.FC<Props> = ({ visits }) => (
  <div className={styles.container}>
    {visits?.map((el) => (
      <div className={styles.pillBlock}>
        <TimePill variant="positive" text={el} />
      </div>
    ))}
  </div>
);
