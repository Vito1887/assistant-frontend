import { Meta, StoryObj } from '@storybook/react';

import { Modal } from 'src/components/molecules/Modal';
import { decorators } from 'src/components/providers/StorybookProvider';
import Component from 'src/components/routes/modals/ViewPictureModal';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Modals/ViewPictureModal',
  component: Component,
  decorators,
};

export default meta;

export const ViewPictureModal: StoryObj<ComponentType> = {
  render: () => (
    <Modal isVisible onDismiss={console.log}>
      <Component picture="https://i.pinimg.com/736x/df/a7/02/dfa7028331cfae8bbe1495454c15fb71.jpg" />
    </Modal>
  ),
};
