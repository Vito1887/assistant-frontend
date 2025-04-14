import React from 'react';

type Props = {
  size?: number;
  color?: 'primary' | 'grey' | 'white';
};

const COLOR_OPTIONS = {
  primary: '--COLOR_PRIMARY',
  grey: '--COLOR_SUBTEXT',
  white: '--COLOR_FOREGROUND',
};

export const Cross: React.FC<Props> = ({ size = 9, color = 'primary' }) => (
  <svg width={`${size}`} height={`${size}`} viewBox="0 0 9 9" fill="none">
    <path
      d="M4.5 3.50016L8.00016 0L9 0.999843L5.49984 4.5L9 8.00016L8.00016 9L4.5 5.49984L0.999843 9L0 8.00016L3.50016 4.5L0 0.999843L0.999843 0L4.5 3.50016Z"
      fill={`var(${COLOR_OPTIONS[color]} )`}
    />
  </svg>
);
