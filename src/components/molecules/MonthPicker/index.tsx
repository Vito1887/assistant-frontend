import React from 'react';

import { Box } from 'src/components/atoms/Box';
import { Arrow } from 'src/components/atoms/icons/iteractions/Arrow';
import { months } from 'src/constants/ui';
import { Msg } from 'src/i18n/Msg';
import { DateFormats, addDate, getDate, subtractDate } from 'src/utils/dates';

import styles from './styles.module.css';

type Props = {
  date: string;
  setDate: (value: string) => void;
  disableLeftPress?: boolean;
};

export const MonthPicker: React.FC<Props> = ({
  date,
  setDate,
  disableLeftPress,
}) => {
  const monthUp = () => {
    setDate(addDate(date, 1, 'month'));
  };

  const monthDown = () => {
    setDate(subtractDate(date, 1, 'month'));
  };

  const month = Number(getDate(date, DateFormats.M));

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Box visible={!disableLeftPress}>
          <button onClick={monthDown} className={styles.button}>
            <div className={styles.leftButton}>
              <Arrow />
            </div>
          </button>
        </Box>
      </div>

      <h3 className={styles.monthText}>
        <Msg id={months[month - 1]} />
      </h3>

      <button onClick={monthUp} className={styles.button}>
        <div className={styles.rightButton}>
          <Arrow />
        </div>
      </button>
    </div>
  );
};
