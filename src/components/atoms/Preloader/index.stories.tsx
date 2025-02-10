import { Meta, StoryObj } from '@storybook/react';

import { Preloader as Component } from 'src/components/atoms/Preloader';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/Preloader',
  component: Component,
  decorators,
};

export default meta;

export const Preloader: StoryObj<ComponentType> = {
  render: () => (
    <div
      style={{
        backgroundColor: 'var(--COLOR_POP_UP_BACKGROUND)',
      }}
    >
      <Component />
    </div>
  ),
};
