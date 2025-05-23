import classNames from 'classnames';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { actions } from 'src/actions';
import { Button } from 'src/components/atoms/buttons/Button';
import { Input } from 'src/components/molecules/Input';
import { TextArea } from 'src/components/molecules/TextArea';
import { useFormik } from 'src/hooks/useFormik';
import { Msg } from 'src/i18n/Msg';
import { ReduxState } from 'src/reducers';
import { validators } from 'src/utils/validation';

import styles from './styles.module.css';

export const UserForm: React.FC = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(
    (state: ReduxState) => ({
      user: state.user?.data,
    }),
    // No rerender
    shallowEqual
  );

  const {
    name,
    surname,
    specialization,
    phone,
    email,
    telegram,
    vkontakte,
    city,
    address,
    notes,
  } = user || {};

  const getUserInfo = (
    name?: string,
    surname?: string,
    specialization?: string,
    phone?: string,
    email?: string,
    telegram?: string,
    vkontakte?: string,
    city?: string,
    address?: string,
    notes?: string
  ) =>
    JSON.stringify({
      command: 'update user info',
      data: {
        name,
        surname,
        specialization,
        phone,
        email,
        telegram,
        vkontakte,
        city,
        address,
        notes,
      },
    });

  const sendUserData = (userInfo = '') =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Telegram.WebApp.sendData(userInfo);

  const updateUserInfo = (
    name?: string,
    surname?: string,
    specialization?: string,
    phone?: string,
    email?: string,
    telegram?: string,
    vkontakte?: string,
    city?: string,
    address?: string,
    notes?: string
  ) =>
    dispatch(
      actions.ui.userInfo.set({
        name,
        surname,
        specialization,
        phone,
        email,
        telegram,
        vkontakte,
        city,
        address,
        notes,
      })
    );

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: name || '',
      surname: surname || '',
      specialization: specialization || '',
      phone: phone || '',
      email: email || '',
      telegram: telegram || '',
      vkontakte: vkontakte || '',
      city: city || '',
      address: address || '',
      notes: notes || '',
    },

    validationSchema: validators.user,

    onSubmit: ({
      name,
      surname,
      specialization,
      phone,
      email,
      telegram,
      vkontakte,
      city,
      address,
      notes,
    }) => {
      sendUserData(
        getUserInfo(
          name,
          surname,
          specialization,
          phone,
          email,
          telegram,
          vkontakte,
          city,
          address,
          notes
        )
      );
      updateUserInfo(
        name,
        surname,
        specialization,
        phone,
        email,
        telegram,
        vkontakte,
        city,
        address,
        notes
      );
    },
  });

  // const onChangeSwitch = () => setNotification(!notification);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContent}>
        <p
          className={classNames(
            'subtext text-style-pale text-style-uppercase text-style-thick',
            styles.menuText
          )}
        >
          <Msg id="components.organisms.forms.UserForm.mainBlock" />
        </p>

        <div className={styles.inputWrapper}>
          <Input
            name="name"
            hasCross
            error={errors.name}
            onChange={handleChange('name')}
            placeholder={{ id: 'components.organisms.forms.UserForm.name' }}
            value={values.name}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Input
            name="surname"
            hasCross
            error={errors.name}
            onChange={handleChange('surname')}
            placeholder={{ id: 'components.organisms.forms.UserForm.surname' }}
            value={values.surname}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Input
            name="specialization"
            hasCross
            error={errors.name}
            onChange={handleChange('specialization')}
            placeholder={{
              id: 'components.organisms.forms.UserForm.specialization',
            }}
            value={values.specialization}
          />
        </div>

        <p
          className={classNames(
            'subtext text-style-pale text-style-uppercase text-style-thick',
            styles.menuText
          )}
        >
          <Msg id="components.organisms.forms.UserForm.contactsBlock" />
        </p>

        <div className={styles.inputWrapper}>
          <Input
            name="phone"
            type="number"
            hasCross
            error={errors.phone}
            onChange={handleChange('phone')}
            placeholder={{ id: 'components.organisms.forms.UserForm.phone' }}
            value={values.phone}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Input
            name="email"
            hasCross
            error={errors.name}
            onChange={handleChange('email')}
            placeholder={{ id: 'components.organisms.forms.UserForm.email' }}
            value={values.email}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Input
            name="telegram"
            hasCross
            error={errors.name}
            onChange={handleChange('telegram')}
            placeholder={{ id: 'components.organisms.forms.UserForm.telegram' }}
            value={values.telegram}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Input
            name="vkontakte"
            hasCross
            error={errors.name}
            onChange={handleChange('vkontakte')}
            placeholder={{
              id: 'components.organisms.forms.UserForm.vkontakte',
            }}
            value={values.vkontakte}
          />
        </div>

        <p
          className={classNames(
            'subtext text-style-pale text-style-uppercase text-style-thick',
            styles.menuText
          )}
        >
          <Msg id="components.organisms.forms.UserForm.locationBlock" />
        </p>

        <div className={styles.inputWrapper}>
          <Input
            name="city"
            hasCross
            error={errors.name}
            onChange={handleChange('city')}
            placeholder={{ id: 'components.organisms.forms.UserForm.city' }}
            value={values.city}
          />
        </div>

        <div className={styles.inputWrapper}>
          <TextArea
            hasCross
            label={{ id: 'components.organisms.forms.UserForm.address' }}
            value={values.address}
            onChange={handleChange('address')}
          />
        </div>

        <p
          className={classNames(
            'subtext text-style-pale text-style-uppercase text-style-thick',
            styles.menuText
          )}
        >
          <Msg id="components.organisms.forms.UserForm.notesBlock" />
        </p>

        <div className={styles.inputWrapper}>
          <TextArea
            hasCross
            label={{ id: 'components.organisms.forms.UserForm.notes' }}
            value={values.notes}
            onChange={handleChange('notes')}
          />
        </div>

        {/*<div className={styles.notifications}>*/}
        {/*  <div>*/}
        {/*    <p className="text">*/}
        {/*      <Msg id="components.organisms.forms.UserForm.checkBox.text" />*/}
        {/*    </p>*/}

        {/*    <p className="subtext text-style-pale ">*/}
        {/*      <Msg id="components.organisms.forms.UserForm.checkBox.subtext" />*/}
        {/*    </p>*/}
        {/*  </div>*/}

        {/*  <Switch checked={notification} onChange={onChangeSwitch} />*/}
        {/*</div>*/}
      </div>

      <div className={styles.confirmButton}>
        <Button
          type="submit"
          variant="primary"
          label={{ id: 'base.buttons.save' }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};
