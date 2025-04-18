import classNames from 'classnames';
import React, { useState } from 'react';

import { Button } from 'src/components/atoms/buttons/Button';
import { Calendar as AntdCalendar } from 'src/components/molecules/Calendar';
import { MonthPicker } from 'src/components/molecules/MonthPicker';
import { Page } from 'src/components/organisms/Page';
import { getDate } from 'src/utils/dates';
import { MAX_DEVICE_WIDTH, SCREEN_WIDTH } from 'src/utils/theme';

import styles from './styles.module.css';

const Calendar: React.FC = () => {
  const currentDate = getDate();

  const [date, setDate] = useState(currentDate);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const currentWidth = SCREEN_WIDTH();

  const isDeviceWidth = currentWidth <= MAX_DEVICE_WIDTH;

  // TODO: Заменить настоящими:
  // const visits: Visit[] = [
  //   {
  //     id: '1',
  //     date: '2025-03-25',
  //     time: '10:00:00',
  //     extraData: 'Нужно создать бронирование 2025-03-25 на 10:00:00',
  //   },
  //   {
  //     id: '2',
  //     date: '2025-03-25',
  //     time: '12:00:00',
  //     extraData: 'Создать визит 2025-03-25 12:00:00',
  //   },
  //   {
  //     id: '3',
  //     date: '2025-03-26',
  //     time: '14:00:00',
  //     extraData: 'Требуется оформить встречу 26 марта 2026 года в полдень',
  //   },
  //   {
  //     id: '4',
  //     date: '2025-03-30',
  //     time: '20:00:00',
  //     extraData: 'Создать встречу 2025-03-30 на 8 вечера',
  //   },
  // ];

  // const selectedDayVisits = visits?.filter((el) => el.date === date);

  // const selectedDayVisitsTime = selectedDayVisits?.map((el) => el.time);
  //
  // const INFORMATIONAL_MESSAGE: Record<string, MsgProps> = {
  //   noMeetings: { id: 'components.routes.pages.Calendar.noMeetings' },
  //   oneMeeting: { id: 'components.routes.pages.Calendar.oneMeeting' },
  //   severalMeetings: { id: 'components.routes.pages.Calendar.severalMeetings' },
  // };

  // const getCurrentInfo = () => {
  //   const visitsCount = selectedDayVisitsTime?.length || 0;
  //
  //   const isSeveralVisits = visitsCount > 1;
  //   const isOneVisit = visitsCount === 1;
  //   const isEmptyDay = visitsCount === 0;
  //
  //   if (isSeveralVisits) {
  //     return 'severalMeetings';
  //   } else if (isOneVisit) {
  //     return 'oneMeeting';
  //   } else if (isEmptyDay) {
  //     return 'noMeetings';
  //   } else {
  //     return 'noMeetings';
  //   }
  // };

  // const currentInfo = getCurrentInfo();

  // const currentInformationalMessage = INFORMATIONAL_MESSAGE[currentInfo];

  const getCurrentAppointmentInfo = (date?: string) =>
    JSON.stringify({ command: 'get appointment', date });

  const sendAppointmentData = () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Telegram.WebApp.sendData(
      selectedDays?.map((el) => getCurrentAppointmentInfo(el))
    );

  return (
    <Page template="entry">
      <div className={styles.calendarBlock}>
        <AntdCalendar
          currentDay={date}
          selectedDays={selectedDays}
          onSelect={setSelectedDays}
        />
      </div>

      <div
        className={classNames(styles.buttonBlock, {
          [styles.desktopBlock]: !isDeviceWidth,
        })}
      >
        <Button
          type="button"
          variant="primarySmall"
          label={{ id: 'base.buttons.showVisits' }}
          onClick={sendAppointmentData}
        />
      </div>

      <div
        className={classNames(styles.buttonBlock, {
          [styles.desktopBlock]: !isDeviceWidth,
        })}
      >
        <Button
          type="button"
          variant="primarySmall"
          label={{ id: 'base.buttons.currentDate' }}
          onClick={() => setDate(currentDate)}
        />
      </div>

      <div
        className={classNames(styles.pickerBlock, {
          [styles.desktopBlock]: !isDeviceWidth,
        })}
      >
        <MonthPicker date={date} setDate={setDate} />
      </div>

      {/*<div className={styles.messagesBlock}>*/}
      {/*  <span className={styles.infoMessage}>*/}
      {/*    <Msg {...currentInformationalMessage} />*/}
      {/*  </span>*/}

      {/*  <PillList visits={selectedDayVisitsTime} />*/}
      {/*</div>*/}
    </Page>
  );
};

export default Calendar;
