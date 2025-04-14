import type { Meta, StoryObj } from '@storybook/react';

import { Input as Component } from 'src/components/molecules/Input';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  component: Component,
  title: 'Molecules/Input',
  decorators,
};

export default meta;

export const Input: StoryObj<ComponentType> = {
  args: {
    name: 'name',
    placeholder: { id: 'components.organisms.forms.UserForm.name' },
    onChange: () => console.log('onChange'),
  },
};
