import Spin from 'antd/lib/spin';
import React from 'react';

import styles from './styles.module.css';

export const Preloader: React.FC = () => (
  <div className={styles.preloader}>
    <Spin />
  </div>
);
