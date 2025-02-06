import React from 'react';

import {
  ViewPictureModal,
  Props as ViewPictureProps,
} from 'src/components/routes/modals/ViewPictureModal';

export type MODALS = keyof Props;

export type Modals = {
  [P in MODALS]: { name: P; data?: Props[P] };
}[MODALS];

type Props = {
  ViewPictureModal: ViewPictureProps;
};

export const modals: {
  [P in MODALS]: React.FC<Props[P]>;
} = {
  ViewPictureModal,
};
