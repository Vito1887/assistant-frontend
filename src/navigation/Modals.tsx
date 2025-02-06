import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from 'src/actions';
import { Modal } from 'src/components/molecules/Modal';
import { modals } from 'src/components/routes/modals';
import { ReduxState } from 'src/reducers';

export const Modals: React.FC = () => {
  const dispatch = useDispatch();

  const { name, data } = useSelector((state: ReduxState) => state.modals) ?? {};

  if (!name) {
    return null;
  }

  const dismiss = () => dispatch(actions.ui.modal.hide());

  const Component = modals[name];

  return (
    <Modal isVisible={!!name} onDismiss={dismiss}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Component {...(data as any)} />
    </Modal>
  );
};
