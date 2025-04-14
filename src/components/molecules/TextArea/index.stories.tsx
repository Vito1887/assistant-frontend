import type { Meta, StoryObj } from '@storybook/react';

import { TextArea as Component } from 'src/components/molecules/TextArea';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  component: Component,
  title: 'Molecules/TextArea',
  decorators,
};

export default meta;

export const TextArea: StoryObj<ComponentType> = {
  args: {
    hasCross: true,
    label: { id: 'components.organisms.forms.UserForm.name' },
    value: 'value',
    onChange: () => console.log('onChange'),
  },
};
