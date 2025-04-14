import React from 'react';

import { Page } from 'src/components/organisms/Page';
import { UserForm } from 'src/components/organisms/forms/UserForm';
import { Msg } from 'src/i18n/Msg';

import styles from './styles.module.css';

const User: React.FC = () => (
  <Page template="entry">
    <div className={styles.wrapper}>
      <p className="pageTitle text-style-centered text-style-thick">
        <Msg id="components.routes.pages.User.title" />
      </p>

      <UserForm />
    </div>
  </Page>
);

export default User;
