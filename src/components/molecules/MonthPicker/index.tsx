import classNames from 'classnames';
import React from 'react';

import { ButtonTransparent } from 'src/components/atoms/buttons/ButtonTransparent';
import { Arrow } from 'src/components/atoms/icons/iteractions/Arrow';
import { months } from 'src/constants/ui';
import { Msg } from 'src/i18n/Msg';
import { DateFormats, addDate, getDate, subtractDate } from 'src/utils/dates';

import styles from './styles.module.css';

type Props = {
  date: string;
  setDate: (value: string) => void;
};

export const MonthPicker: React.FC<Props> = ({ date, setDate }) => {
  const monthUp = () => {
    setDate(addDate(date, 1, 'month'));
  };

  const monthDown = () => {
    setDate(subtractDate(date, 1, 'month'));
  };

  const month = Number(getDate(date, DateFormats.M));

  return (
    <div className={styles.container}>
      <ButtonTransparent
        onClick={monthDown}
        customStyles={classNames(styles.button, styles.leftButton)}
      >
        <Arrow />
      </ButtonTransparent>

      <p className={styles.monthText}>
        <Msg id={months[month - 1]} />
      </p>

      <ButtonTransparent onClick={monthUp} customStyles={styles.button}>
        <Arrow />
      </ButtonTransparent>
    </div>
  );
};
