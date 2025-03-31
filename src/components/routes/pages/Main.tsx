import React, { useState } from 'react';

import { Button } from 'src/components/atoms/buttons/Button';
import { Calendar } from 'src/components/molecules/Calendar';
import { MonthPicker } from 'src/components/molecules/MonthPicker';
import { Page } from 'src/components/organisms/Page';
import { getDate } from 'src/utils/dates';

import styles from './styles.module.css';

const Main: React.FC = () => {
  const currentDate = getDate();

  const [date, setDate] = useState(currentDate);

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
  //   noMeetings: { id: 'components.routes.pages.Main.noMeetings' },
  //   oneMeeting: { id: 'components.routes.pages.Main.oneMeeting' },
  //   severalMeetings: { id: 'components.routes.pages.Main.severalMeetings' },
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

  const getCurrentAppointmentInfo = (date?: string) => ({
    type: 'app_command',
    command: 'get appointment',
    date,
  });

  const currentAppointmentInfo = getCurrentAppointmentInfo(date);

  const sendAppointmentData = () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Telegram.WebApp.sendData(currentAppointmentInfo);

  return (
    <Page template="entry">
      <div className={styles.calendarBlock}>
        <Calendar selectedDay={date} onSelect={setDate} />
      </div>

      <div className={styles.buttonBlock}>
        <Button
          type="button"
          variant="primary"
          label={{ id: 'base.buttons.showVisits' }}
          onClick={sendAppointmentData}
        />
      </div>

      <div className={styles.buttonBlock}>
        <Button
          type="button"
          variant="primarySmall"
          label={{ id: 'base.buttons.currentDate' }}
          onClick={() => setDate(currentDate)}
        />
      </div>

      <div className={styles.pickerBlock}>
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

export default Main;
