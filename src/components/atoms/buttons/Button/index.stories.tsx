import { Meta, StoryObj } from '@storybook/react';

import { Button as Component } from 'src/components/atoms/buttons/Button';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/Buttons/Button',
  component: Component,
  decorators,
};

export default meta;

export const Button: StoryObj<ComponentType> = {
  args: {
    variant: 'primary',
    label: { id: 'base.buttons.save' },
  },
};
