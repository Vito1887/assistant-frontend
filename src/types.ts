import { Params } from 'react-router-dom';

import { PAGES } from 'src/constants/navigation';
import { DictionaryKey, Locales } from 'src/i18n';

export type ID = string;
export type Date = string;
export type Time = string;
export type Email = string;

export type ModalMode = 'base' | 'light' | 'inky';

export type Scheme = {
  scheme: PAGES;
  params?: Params;
};

export type IconBaseProps = {
  size?: number;
  fill?: string;
};

export type User = {
  userId?: ID;
  name?: string;
  surname?: string;
  specialization?: string;
  phone?: string;
  email?: Email;
  telegram?: string;
  vkontakte?: string;
  city?: string;
  address?: string;
  notes?: string;
};

export type Visit = {
  id: string;
  date: Date;
  time: Time;
  extraData?: string;
};

export type Weekday = {
  index: number;
  day: DictionaryKey;
};

export type GeoInfo = {
  city?: string;
  country?: string;
  locale: Locales;
};

export namespace Actions {
  export namespace api {
    export namespace user {
      export namespace getUser {
        export type started = {
          extra: {
            orderUID: User['userId'];
          };
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
          data: User;
        };
      }
    }
  }

  export namespace ui {
    export namespace userInfo {
      export type set = {
        name?: string;
        surname?: string;
        specialization?: string;
        phone?: string;
        email?: Email;
        telegram?: string;
        vkontakte?: string;
        city?: string;
        address?: string;
        notes?: string;
      };
    }

    export namespace geoInfo {
      export type set = {
        info: GeoInfo;
      };
    }

    export namespace loader {
      export type show = void;
      export type hide = void;
    }

    export namespace redirect {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      export type redirectWithoutParams = any;
    }

    export namespace modal {
      export type show<T> = T;
      export type hide = void;
    }
  }
}
