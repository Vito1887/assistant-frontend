import { Meta, StoryObj } from '@storybook/react';

import { TimePill as Component } from 'src/components/atoms/TimePill';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/TimePill',
  component: Component,
  decorators,
};

export default meta;

export const TimePill: StoryObj<ComponentType> = {
  args: { variant: 'positive', text: '10:00 AM' },
};
