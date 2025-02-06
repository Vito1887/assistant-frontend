import React from 'react';

import styles from './styles.module.css';

export type Props = {
  picture?: string;
};

export const ViewPictureModal: React.FC<Props> = ({ picture }) => (
  <div className={styles.wrapper}>
    {picture && (
      <img src={picture} className={styles.picture} alt="attachmant" />
    )}
  </div>
);
