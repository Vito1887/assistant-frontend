import type { Meta, StoryObj } from '@storybook/react';

import { Calendar as Component } from 'src/components/molecules/Calendar';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  component: Component,
  title: 'Molecules/Calendar',
  decorators,
};

export default meta;

export const Calendar: StoryObj<ComponentType> = {};
