import Spin from 'antd/lib/spin';
import React, { useEffect } from 'react';

import { Page } from 'src/components/organisms/Page';
import { Msg } from 'src/i18n/Msg';

import styles from './styles.module.css';

const Timezone: React.FC = () => {
  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const getCurrentTimezoneInfo = (currentTimezone?: string) =>
    JSON.stringify({ command: 'set timezone', data: currentTimezone });

  const currentTimezoneInfo = getCurrentTimezoneInfo(currentTimezone);

  const sendAppointmentData = () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Telegram.WebApp.sendData(currentTimezoneInfo);

  useEffect(() => {
    if (currentTimezone) {
      sendAppointmentData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTimezone]);

  return (
    <Page template="entry">
      <div className={styles.wrapper}>
        <Spin />

        <p className={styles.infoMessage}>
          <Msg id="components.routes.pages.Timezone.timezoneDefinition" />
        </p>
      </div>
    </Page>
  );
};

export default Timezone;
