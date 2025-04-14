import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { Box } from 'src/components/atoms/Box';
import { Error } from 'src/components/atoms/Error';
import { SymbolCounter } from 'src/components/atoms/SymbolCounter';
import { ButtonTransparent } from 'src/components/atoms/buttons/ButtonTransparent';
import { Cross } from 'src/components/atoms/icons/iteractions/Cross';
import { Msg, MsgProps, msg } from 'src/i18n/Msg';

import styles from './styles.module.css';

type Props = {
  testID?: string;
  editable?: boolean;
  multiline?: boolean;
  error?: string;
  label?: MsgProps;
  onChange?: (text: string) => void;
  placeholder?: MsgProps;
  required?: boolean;
  value?: string;
  hasCross?: boolean;
  maxLength?: number;
  withSymbolCounter?: boolean;
};

export const TextArea: React.FC<Props> = ({
  error,
  label,
  onChange,
  placeholder,
  required = false,
  value,
  hasCross,
  maxLength,
  multiline = true,
  withSymbolCounter,
}) => {
  const intl = useIntl();

  const [isTouched, setIsTouched] = useState(!!value);
  const [focused, setFocused] = useState(false);

  const dynamicStyles = {
    borderColor:
      error && !required
        ? 'var(--COLOR_NEGATIVE)'
        : 'var(--COLOR.STROKE_GENERAL)',
    backgroundColor: required
      ? 'var(--COLOR_SECONDARY)'
      : 'var(--COLOR_FOREGROUND)',
    paddingTop: label && multiline ? 'var(--PADDING_30)' : 'var(--PADDING_10)',
  };

  useEffect(() => {
    setIsTouched(!!value);
  }, [value, focused]);

  const isLabelActive = placeholder || focused || isTouched;

  return (
    <div className={styles.container}>
      <textarea
        maxLength={maxLength}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        onTouchStart={() => setIsTouched(true)}
        placeholder={placeholder ? msg(intl, { ...placeholder }) : undefined}
        className={classNames(styles.input, dynamicStyles)}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />

      {label && (
        <p className={isLabelActive ? styles.labelOnTouch : styles.label}>
          <Msg {...label} />
        </p>
      )}

      <Box visible={!!value && hasCross} className={styles.cross}>
        <ButtonTransparent onClick={() => onChange && onChange('')}>
          <Cross size={12} color="grey" />
        </ButtonTransparent>
      </Box>

      <div className={styles.underTextInput}>
        {withSymbolCounter && maxLength && (
          <SymbolCounter maxLength={maxLength} value={value?.length || 0} />
        )}
      </div>

      <div
        className={classNames(styles.error, {
          [styles.errorIndent]: withSymbolCounter && maxLength,
        })}
      >
        <Error error={error} />
      </div>
    </div>
  );
};
