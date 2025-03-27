import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

import { Props } from './types';

export const TimePill: React.FC<Props> = ({ text, variant, onPress }) => (
  <button
    onClick={onPress}
    className={classNames(styles.wrapper, {
      [styles.pointerCursor]: onPress,
    })}
  >
    <p className={classNames('subtext', styles[variant])}>{text}</p>
  </button>
);
