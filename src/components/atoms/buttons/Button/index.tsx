import classNames from 'classnames';
import React from 'react';

import { Msg, MsgProps } from 'src/i18n/Msg';

import styles from './styles.module.css';

type Props = {
  type: 'button' | 'submit';
  variant: 'primary';
  label: MsgProps;
  onClick?: () => void;
  disabled?: boolean;
};

const variantToClassName: Record<Props['variant'], string> = {
  primary: styles.primary,
};

export const Button: React.FC<Props> = ({ variant, label, ...props }) => (
  <button
    {...props}
    className={classNames(styles.button, variantToClassName[variant], {
      [styles.disabled]: props.disabled,
    })}
  >
    <Msg {...label} />
  </button>
);
