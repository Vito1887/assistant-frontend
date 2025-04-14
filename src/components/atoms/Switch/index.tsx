import React from 'react';

import './styles.module.css';

type Props = {
  checked: boolean;
  onChange: () => void;
};

export const Switch: React.FC<Props> = ({ checked, onChange }) => (
  <label className="toggle-switch">
    <input type="checkbox" checked={checked} onChange={onChange} />

    <span className="switch" />
  </label>
);
