import { Meta, StoryObj } from '@storybook/react';

import { Switch as Component } from 'src/components/atoms/Switch';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/Switch',
  component: Component,
  decorators,
};

export default meta;

export const Switch: StoryObj<ComponentType> = {};
