import * as yup from 'yup';
import 'yup-phone';

import { Events } from 'src/i18n';

const _msg = (message: Events): Events => message;

export const rules = {
  name: yup.string().max(100, _msg('events.error.name.invalid')),
};

export const validators = {
  user: () =>
    yup.object().shape({
      name: rules.name,
    }),
};
