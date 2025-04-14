import classname from 'classnames';
import React, { HTMLInputTypeAttribute, useRef, useState } from 'react';

import { Box } from 'src/components/atoms/Box';
import { Error } from 'src/components/atoms/Error';
import { ButtonTransparent } from 'src/components/atoms/buttons/ButtonTransparent';
import { Cross } from 'src/components/atoms/icons/iteractions/Cross';
import { Msg, MsgProps } from 'src/i18n/Msg';

import styles from './styles.module.css';

type Props = {
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
  name: string;
  error?: string;
  placeholder: MsgProps;
  value?: string;
  onChange: (value: string) => void;
  hasCross?: boolean;
};

export const Input: React.FC<Props> = ({
  disabled,
  type = 'text',
  name,
  error,
  placeholder,
  value,
  onChange,
  hasCross,
}) => {
  const [placeholderActive, setPlaceholderActive] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container}>
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        value={value}
        onFocus={() => setPlaceholderActive(true)}
        onBlur={() => setPlaceholderActive(false)}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        className={styles.input}
      />

      <label
        onClick={() => ref.current?.focus()}
        className={classname(styles.placeholder, {
          [styles.placeholderActive]: placeholderActive || value?.length,
        })}
      >
        <Msg {...placeholder} />
      </label>

      <Box visible={!!value && hasCross} className={styles.cross}>
        <ButtonTransparent onClick={() => onChange && onChange('')}>
          <Cross size={12} color="grey" />
        </ButtonTransparent>
      </Box>

      <Error error={error} />
    </div>
  );
};
