import { Meta, StoryObj } from '@storybook/react';

import { Modal as Component } from 'src/components/molecules/Modal';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Molecules/Modal',
  component: Component,
  decorators,
};

export default meta;

export const Modal: StoryObj<ComponentType> = {
  args: {
    isVisible: true,
    onDismiss: console.log,
  },
  render: ({ isVisible, onDismiss }) => (
    <div className="sb_modal_container">
      <Component isVisible={isVisible} onDismiss={onDismiss}>
        <div style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
          <p
            style={{ backgroundColor: 'var(--COLOR_STROKE_BORDER)', margin: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fermentum metus faucibus massa aliquam accumsan ut nec odio. Donec
            diam lorem, pharetra a gravida a, scelerisque vel tellus.
          </p>
        </div>
      </Component>
    </div>
  ),
};

export const ModalWithPopUp: StoryObj<ComponentType> = {
  args: {
    isVisible: true,
    onDismiss: console.log,
    withClose: true,
  },
  render: ({ isVisible, onDismiss, withClose }) => (
    <div className="sb_modal_container">
      <Component
        isVisible={isVisible}
        onDismiss={onDismiss}
        withClose={withClose}
      >
        <div style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
          <p
            style={{ backgroundColor: 'var(--COLOR_STROKE_BORDER)', margin: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fermentum metus faucibus massa aliquam accumsan ut nec odio. Donec
            diam lorem, pharetra a gravida a, scelerisque vel tellus.
          </p>
        </div>
      </Component>
    </div>
  ),
};
