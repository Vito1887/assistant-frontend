import { Meta, StoryObj } from '@storybook/react';

import { UserForm as Component } from 'src/components/organisms/forms/UserForm';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Organisms/Forms/UserForm',
  component: Component,
  decorators,
};

export default meta;

export const UserForm: StoryObj<ComponentType> = {};
