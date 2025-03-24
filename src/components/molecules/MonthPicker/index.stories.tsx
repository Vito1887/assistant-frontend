import { Meta, StoryObj } from '@storybook/react';

import { MonthPicker as Component } from 'src/components/molecules/MonthPicker';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Molecules/MonthPicker',
  component: Component,
  decorators,
};

export default meta;

export const MonthPicker: StoryObj<ComponentType> = {
  args: {
    date: '2024-02-12',
  },
};
