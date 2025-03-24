import AntdCalendar from 'antd/lib/calendar';
import { Dayjs } from 'dayjs';
import React from 'react';
import { useIntl } from 'react-intl';

import { Day } from 'src/components/atoms/Day';
import { monthsShort, weekdaysShort } from 'src/constants/ui';
import { msg } from 'src/i18n/Msg';
import { TDate, Time } from 'src/types';
import {
  DateFormats,
  getDate,
  getDayWeeks,
  isSameDate,
  toShortDate,
} from 'src/utils/dates';

import styles from './styles.module.css';

type Props = {
  onSelect: (date: string) => void;
  currentDate: Dayjs;
  freeSlots?: {
    date: TDate;
    isFree: boolean;
    freeSlots: Time[];
  }[];
  workDays: boolean[];
  selectedDay?: {
    date: string;
  };
};

export const Calendar: React.FC<Props> = ({
  onSelect,
  currentDate,
  workDays,
  freeSlots,
  selectedDay,
}) => {
  const intl = useIntl();
  const today = getDate();

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

  const disabledDate = (date: Dayjs) => {
    const current = currentDate;

    const freeSlotsForCurrentDay = (freeSlots || []).filter(
      (el) => el.date === getDate(currentDate)
    );

    if (
      !date.isSame(current, 'month') ||
      (!workDays[getDayWeeks(getDate(date))] &&
        !freeSlotsForCurrentDay[0]?.freeSlots) ||
      date.isBefore(today)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <AntdCalendar
      fullCellRender={(date, info) => {
        const today = getDate(info.today) === getDate(date);
        const isCurrent = getDate(date) === getDate(currentDate);
        const outMonth = !isSameDate(date, currentDate, 'month');
        const isFreeSlots = freeSlots?.find(
          (value) => value.date === getDate(date)
        )?.isFree;
        const isWorkDay = !disabledDate(date);
        const isSelectSlots = selectedDay?.date === getDate(date);

        return (
          <Day
            current={isCurrent}
            date={date}
            today={today}
            outMonth={outMonth}
            freeSlots={isFreeSlots}
            isWorkDay={isWorkDay}
            isSelectSlot={isSelectSlots}
          />
        );
      }}
      disabledDate={disabledDate}
      value={currentDate}
      fullscreen={false}
      onSelect={(value) => onSelect(toShortDate(value.toString()))}
      headerRender={() => (
        <>
          <div className={styles.header}>
            <p>{currentMonthYear}</p>
          </div>
        </>
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
