import { Meta, StoryObj } from '@storybook/react';

import { PillList as Component } from 'src/components/molecules/PillList';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Molecules/PillList',
  component: Component,
  decorators,
};

export default meta;

export const PillList: StoryObj<ComponentType> = {
  args: {
    visits: ['10:00:00', '12:00:00'],
  },
};
