import { Meta, StoryObj } from '@storybook/react';

import { Dimmer as Component } from 'src/components/atoms/Dimmer';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/Dimmer',
  component: Component,
  decorators,
};

export default meta;

export const Dimmer: StoryObj<ComponentType> = {
  args: {
    inProgress: false,
    onClose: console.log,
  },
  render: (args) => (
    <>
      <Component inProgress={args.inProgress} onClose={args.onClose} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
        metus faucibus massa aliquam accumsan ut nec odio. Donec diam lorem,
        pharetra a gravida a, scelerisque vel tellus. Sed convallis libero ut
        quam rhoncus, eget pellentesque ligula maximus. Ut condimentum risus
        vitae nulla accumsan congue.
      </p>
      <p>
        Nam commodo tellus et odio malesuada, quis molestie sem pharetra. Ut
        aliquam dictum eros quis iaculis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <p>
        Fusce hendrerit dui sed turpis aliquam, eget elementum nunc feugiat.
        Curabitur bibendum arcu ut nulla dignissim pulvinar in eget ligula. Cras
        sagittis ut elit non luctus. Donec posuere lorem non feugiat vulputate.
        Quisque vel ornare ante, vestibulum rutrum purus. Suspendisse eu commodo
        nunc. Praesent ultricies ipsum eu ipsum pulvinar accumsan. Maecenas
        fringilla, dolor convallis commodo elementum, metus odio rhoncus leo,
        quis pretium nibh lorem id urna.
      </p>
    </>
  ),
};
