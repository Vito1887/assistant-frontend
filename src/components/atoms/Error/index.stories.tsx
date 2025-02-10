import { Meta, StoryObj } from '@storybook/react';

import { Error as Component } from 'src/components/atoms/Error';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/Error',
  component: Component,
  decorators,
};

export default meta;

export const Error: StoryObj<ComponentType> = {
  args: {
    error: 'components.routes.pages.Error404.body',
  },
};
