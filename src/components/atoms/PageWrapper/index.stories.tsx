import { Meta, StoryObj } from '@storybook/react';

import { PageWrapper as Component } from 'src/components/atoms/PageWrapper';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/PageWrapper',
  component: Component,
  decorators,
};

export default meta;

export const PageWrapper: StoryObj<ComponentType> = {
  render: () => (
    <Component>
      <div
        style={{
          backgroundColor: 'var(--COLOR_SECONDARY_BACKGROUND)',
          height: '100vh',
          width: '100%',
        }}
      />
    </Component>
  ),
};
