import React from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'src/components/organisms/Page';
import { Msg } from 'src/i18n/Msg';
import { ReduxState } from 'src/reducers';

import styles from './styles.module.css';

const User: React.FC = () => {
  const { user } = useSelector(
    ({ user }: ReduxState) => ({
      user: user.data,
    }), // No rerender
    (left, right) => JSON.stringify(left) === JSON.stringify(right)
  );

  if (!user) {
    return (
      <Page template="entry">
        <Msg id="components.routes.pages.User.notFound" />
      </Page>
    );
  }

  const { name, phone, email } = user;

  return (
    <Page template="entry">
      <div className={styles.header}>
        <div className={styles.descriptions}>
          <p className="title">{name}</p>

          <p className="subtitle">{phone}</p>

          <p className="subtitle">{email}</p>
        </div>
      </div>
    </Page>
  );
};

export default User;
