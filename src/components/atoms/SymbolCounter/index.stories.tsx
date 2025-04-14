import { Meta, StoryObj } from '@storybook/react';

import { SymbolCounter as Component } from 'src/components/atoms/SymbolCounter';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/SymbolCounter',
  component: Component,
  decorators,
};

export default meta;

export const SymbolCounter: StoryObj<ComponentType> = {
  args: {
    value: 1,
    maxLength: 2,
  },
};
