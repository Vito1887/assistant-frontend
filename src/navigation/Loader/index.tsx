import Spin from 'antd/lib/spin';
import React from 'react';
import { useSelector } from 'react-redux';

import { ReduxState } from 'src/reducers';

import styles from './styles.module.css';

export const Loader: React.FC = () => {
  const { isShownLoader } = useSelector(
    (state: ReduxState) => ({
      isShownLoader: state.loader,
    }), // No rerender
    (left, right) => JSON.stringify(left) === JSON.stringify(right)
  );

  return (
    <>
      {isShownLoader && (
        <div className={styles.loader}>
          <Spin />
        </div>
      )}
    </>
  );
};
