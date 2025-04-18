import AntdCalendar from 'antd/lib/calendar';
import { Dayjs } from 'dayjs';
import React from 'react';
import { useIntl } from 'react-intl';

import { Day } from 'src/components/atoms/Day';
import { months, weekdaysShort } from 'src/constants/ui';
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
  currentDay: string;
  selectedDays?: string[];
  onSelect: (dates: string[]) => void;
};

export const Calendar: React.FC<Props> = ({
  currentDay,
  selectedDays = [],
  onSelect,
}) => {
  const intl = useIntl();

  const currentDate = toDayJsDate(currentDay);

  const shortWeekdays = weekdaysShort.map((_, index) =>
    msg(intl, { id: weekdaysShort[index].day })
  );

  const fullMonths = months.map((el) => msg(intl, { id: el }));

  const currentMonthYear =
    msg(intl, {
      id: months[Number(getDate(currentDate, DateFormats.M)) - 1],
    }) +
    '\n' +
    getDate(currentDate, DateFormats.YYYY);

  const handleSelect = (date: Dayjs) => {
    if (!date || !date.isValid()) {
      return;
    }

    const selectedDay = toShortDate(date.toString());

    let newSelectedRange: string[];

    if (selectedDays.includes(selectedDay)) {
      newSelectedRange = selectedDays.filter((d) => d !== selectedDay);
    } else {
      newSelectedRange = [...selectedDays, selectedDay].sort();
    }

    onSelect(newSelectedRange);
  };

  return (
    <AntdCalendar
      fullCellRender={(date, info) => {
        const isCurrent = getDate(info.today) === getDate(date);
        const outMonth = !isSameDate(date, currentDate, 'month');

        const isSelectedDay = selectedDays.includes(
          toShortDate(date.toString())
        );

        return (
          <Day
            current={isCurrent}
            date={date}
            outMonth={outMonth}
            isSelectSlot={isSelectedDay}
          />
        );
      }}
      value={currentDate}
      fullscreen={false}
      onSelect={handleSelect}
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
          shortMonths: fullMonths,
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
