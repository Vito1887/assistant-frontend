import { Meta, StoryObj } from '@storybook/react';

import { Page as Component } from 'src/components/organisms/Page';
import { decorators } from 'src/components/providers/StorybookProvider';
import { PAGES } from 'src/constants/navigation';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Organisms/Page',
  component: Component,
  decorators,
};

export default meta;

export const WithoutTitle: StoryObj<ComponentType> = {
  render: () => <Component template="withHeader">text</Component>,
};

export const WithDefaultTitle: StoryObj<ComponentType> = {
  render: () => (
    <Component template="withHeader" title>
      text
    </Component>
  ),
};

export const WithDefaultTitleAndNavigation: StoryObj<ComponentType> = {
  render: () => (
    <Component template="withHeader" title back={{ scheme: PAGES.CALENDAR }}>
      text
    </Component>
  ),
};

export const WithCustomTitle: StoryObj<ComponentType> = {
  render: () => (
    <Component template="withHeader" title="Custom title">
      text
    </Component>
  ),
};
