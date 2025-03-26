import React, { useState } from 'react';

import { Calendar } from 'src/components/molecules/Calendar';
import { MonthPicker } from 'src/components/molecules/MonthPicker';
import { Page } from 'src/components/organisms/Page';
import { getDate, toDayJsDate } from 'src/utils/dates';

import styles from './styles.module.css';

const Main: React.FC = () => {
  const currentDate = getDate();

  const [date, setDate] = useState(currentDate);

  const disableLeftPress = date.slice(0, 7) === currentDate.slice(0, 7);

  const weekdays = [true, true, true, true, true, false, false];

  return (
    <Page template="entry">
      <div className={styles.calendarBlock}>
        <Calendar
          onSelect={setDate}
          currentDate={toDayJsDate(date)}
          workDays={weekdays}
          freeSlots={[]}
        />
      </div>

      <div className={styles.pickerBlock}>
        <MonthPicker
          date={date}
          setDate={setDate}
          disableLeftPress={disableLeftPress}
        />
      </div>
    </Page>
  );
};

export default Main;
