import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import React from 'react';

import { Box } from 'src/components/atoms/Box';
import { DateFormats, getDate } from 'src/utils/dates';

import styles from './styles.module.css';

type Props = {
  date: Dayjs;
  today?: boolean;
  current?: boolean;
  isWorkDay?: boolean;
  freeSlots?: boolean;
  outMonth?: boolean;
  isSelectSlot?: boolean;
};

export const Day: React.FC<Props> = ({
  date,
  isWorkDay = true,
  current = false,
  today = false,
  freeSlots = true,
  outMonth = false,
  isSelectSlot = false,
}) => {
  const day = getDate(date, DateFormats.D);

  const styleBody = getStyle(
    current,
    freeSlots,
    isWorkDay,
    today,
    isSelectSlot
  );

  return (
    <Box
      visible={!outMonth}
      className={classNames(styles.container, styleBody)}
    >
      <p>{day}</p>
      {isSelectSlot && <div className={styles.dot}></div>}
    </Box>
  );
};

const getStyle = (
  current: boolean,
  freeSlots: boolean,
  isWorkDay: boolean,
  today: boolean,
  isSelectSlot: boolean
) => {
  const arrStyle = [
    styles.todayWorkday,
    styles.gray,
    styles.workday,
    styles.gray,
    styles.gray,
    styles.default,
  ];
  let keyStyle = 5;

  if (current) {
    keyStyle = freeSlots && isWorkDay ? 0 : 1;
  } else if (today || isSelectSlot) {
    keyStyle = freeSlots ? 2 : 3;
  } else if (!isWorkDay) {
    keyStyle = 4;
  } else if (!freeSlots) {
    keyStyle = 3;
  }

  return arrStyle[keyStyle];
};
