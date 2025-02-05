import React from 'react';

type Props = {
  visible?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Box: React.FC<Props> = ({
  children,
  className,
  visible = true,
}) => (visible ? <div className={className}>{children}</div> : null);
