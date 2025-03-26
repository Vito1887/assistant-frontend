import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  customStyles?: string;
};

export const ButtonTransparent: React.FC<Props> = ({
  disabled,
  onClick,
  children,
  customStyles,
}) => (
  <button
    disabled={disabled}
    className={classNames(styles.wrapper, customStyles)}
    onClick={onClick}
  >
    {children}
  </button>
);
