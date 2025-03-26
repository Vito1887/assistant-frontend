import { Meta, StoryObj } from '@storybook/react';

import { ButtonTransparent as Component } from 'src/components/atoms/buttons/ButtonTransparent';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/Buttons/ButtonTransparent',
  component: Component,
  decorators,
};

export default meta;

export const ButtonTransparent: StoryObj<ComponentType> = {
  args: {
    disabled: false,
    onClick: () => console.log(),
    children: <div />,
  },
};
