import classNames from 'classnames';
import React, { ReactNode } from 'react';

import { Dimmer } from 'src/components/atoms/Dimmer';
import { CloseLine } from 'src/components/atoms/icons/CloseLine';
import { Cross } from 'src/components/atoms/icons/Cross';
import { useUnmount } from 'src/hooks/useUnmount';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  isVisible: boolean;
  onDismiss: () => void;
  withClose?: boolean;
};

export const Modal: React.FC<Props> = ({
  children,
  isVisible,
  onDismiss,
  withClose,
}) => {
  const { visible, inProgress } = useUnmount({ isVisible, delaySeconds: 0.3 });

  if (!visible) {
    return null;
  }

  return (
    <Dimmer onClose={onDismiss} inProgress={inProgress}>
      <div
        className={classNames(styles.modal, {
          [styles.modal__hide]: inProgress,
        })}
      >
        {withClose && (
          <div className={styles.close}>
            <button className={styles.closeLine} onTouchStart={onDismiss}>
              <CloseLine />
            </button>

            <button className={styles.closeCross} onClick={onDismiss}>
              <Cross />
            </button>
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </Dimmer>
  );
};
