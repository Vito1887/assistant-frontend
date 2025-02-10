import { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'src/components/providers/StorybookProvider';
import Component from 'src/components/routes/pages/User';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Pages/User',
  component: Component,
  decorators,
};

export default meta;

export const UserPage: StoryObj<ComponentType> = {};
