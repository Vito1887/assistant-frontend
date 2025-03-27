import AntdCalendar from 'antd/lib/calendar';
import React from 'react';
import { useIntl } from 'react-intl';

import { Day } from 'src/components/atoms/Day';
import { monthsShort, weekdaysShort } from 'src/constants/ui';
import { msg } from 'src/i18n/Msg';
import {
  DateFormats,
  getDate,
  isSameDate,
  toDayJsDate,
  toShortDate,
} from 'src/utils/dates';

import styles from './styles.module.css';

type Props = {
  selectedDay: string;
  onSelect: (date: string) => void;
};

export const Calendar: React.FC<Props> = ({ selectedDay, onSelect }) => {
  const intl = useIntl();

  const currentDate = toDayJsDate(selectedDay);

  const shortWeekdays = weekdaysShort.map((_, index) =>
    msg(intl, { id: weekdaysShort[index].day })
  );

  const shortMonths = monthsShort.map((el) => msg(intl, { id: el }));

  const currentMonthYear =
    msg(intl, {
      id: monthsShort[Number(getDate(currentDate, DateFormats.M)) - 1],
    }) +
    '\n' +
    getDate(currentDate, DateFormats.YYYY);

  return (
    <AntdCalendar
      fullCellRender={(date, info) => {
        const today = getDate(info.today) === getDate(date);
        const isCurrent = getDate(date) === getDate(currentDate);
        const outMonth = !isSameDate(date, currentDate, 'month');
        const isSelectSlots = selectedDay === getDate(date);

        return (
          <Day
            current={isCurrent}
            date={date}
            today={today}
            outMonth={outMonth}
            isSelectSlot={isSelectSlots}
          />
        );
      }}
      value={currentDate}
      fullscreen={false}
      onSelect={(value) => onSelect(toShortDate(value.toString()))}
      headerRender={() => (
        <div className={styles.header}>
          <p>{currentMonthYear}</p>
        </div>
      )}
      locale={{
        lang: {
          locale: 'en_US',
          placeholder: 'Select date',
          rangePlaceholder: ['Start date', 'End date'],
          today: 'Today',
          now: 'Now',
          backToToday: 'Back to today',
          ok: 'OK',
          clear: 'Clear',
          month: msg(intl, { id: 'components.atoms.Calendar.month' }),
          year: msg(intl, { id: 'components.atoms.Calendar.year' }),
          timeSelect: 'Select time',
          dateSelect: 'Select date',
          monthSelect: 'Choose a month',
          yearSelect: 'Choose a year',
          decadeSelect: 'Choose a decade',
          yearFormat: 'YYYY',
          dateFormat: 'M/D/YYYY',
          dayFormat: 'D',
          dateTimeFormat: 'M/D/YYYY HH:mm:ss',
          monthFormat: 'MMMM',
          monthBeforeYear: true,
          previousMonth: 'Previous month (PageUp)',
          nextMonth: 'Next month (PageDown)',
          previousYear: 'Last year (Control + left)',
          nextYear: 'Next year (Control + right)',
          previousDecade: 'Last decade',
          nextDecade: 'Next decade',
          previousCentury: 'Last century',
          nextCentury: 'Next century',
          shortWeekDays: shortWeekdays,
          shortMonths: shortMonths,
        },
        timePickerLocale: {
          placeholder: 'Select time',
        },
        dateFormat: 'YYYY-MM-DD',
        dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
        weekFormat: 'YYYY-wo',
        monthFormat: 'YYYY-MM',
      }}
    />
  );
};
