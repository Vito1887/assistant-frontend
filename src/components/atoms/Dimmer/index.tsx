import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';

import { ModalMode } from 'src/types';

import styles from './styles.module.css';

export type Props = {
  inProgress: boolean;
  isDisabled?: boolean;
  onClose?: () => void;
  zIndex?: number;
  children?: ReactNode;
  mode?: ModalMode;
};

export enum DIMMER_MODE {
  BASE = 'base',
  LIGHT = 'light',
  INKY = 'inky',
}

export const Dimmer: React.FC<Props> = ({
  children,
  inProgress,
  isDisabled,
  onClose,
  zIndex = 100,
  mode = DIMMER_MODE.BASE,
}) => {
  useEffect(() => {
    document.body.style.overflow = inProgress ? 'unset' : 'hidden';
  }, [inProgress]);

  return (
    <div
      className={classNames(styles.dimmer, {
        [styles.lightDimmer]: mode === DIMMER_MODE.LIGHT,
        [styles.inkyDimmer]: mode === DIMMER_MODE.INKY,
        [styles.inkyDimmer__hide]: inProgress && mode === DIMMER_MODE.INKY,
        [styles.baseDimmer__hide]: inProgress && mode === DIMMER_MODE.BASE,
        [styles.lightDimmer__hide]: inProgress && mode === DIMMER_MODE.LIGHT,
        [styles.dimmer__disabled]: isDisabled,
      })}
      style={{ zIndex }}
      onClick={isDisabled ? undefined : onClose}
    >
      {children}
    </div>
  );
};
