import dayjs, { Dayjs, ManipulateType, locale } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import objectSupport from 'dayjs/plugin/objectSupport';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(customParseFormat);
dayjs.locale(locale());
dayjs.extend(localizedFormat);
dayjs.extend(objectSupport);
dayjs.extend(localeData);
dayjs.extend(weekday);

export enum TimeUnits {
  WEEK = 'week',
  ISO_WEEK = 'isoWeek',
  MONTH = 'month',
  YEAR = 'year',
  DAY = 'day',
  HOUR = 'hour',
  MINUTE = 'minute',
}

export enum DateFormats {
  YYYY_MM_DD_T_HH_MM_SS = 'YYYY-MM-DDTHH:mm:ss', // 2024-05-07T10:00:00
  YYYY = 'YYYY', // 2024
  MMM = 'MMM', // Jan
  D_MMM = 'D MMM', // 1 Jan
  YYYY_MM_DD = 'YYYY-MM-DD', // 2021-01-01
  HH_MM = 'HH:MM', // 17:00
  HH_MM_SS = 'HH:mm:ss', // 10:00:00
  M = 'M', // 5
  D = 'D', // 3
}

export const isValid = (date?: string | number): boolean =>
  dayjs(date).isValid();

export const getDate = (
  date?: Dayjs | string,
  format: DateFormats = DateFormats.YYYY_MM_DD
) => dayjs(date).format(format);

export const getDayWeeks = (date?: string) =>
  dayjs(isValid(date) ? date : undefined).day();

export const isSameDate = (
  date: string | Dayjs,
  referenceDate: string | Dayjs,
  unit: ManipulateType = TimeUnits.DAY
) => dayjs(date).isSame(dayjs(referenceDate), unit);

export const addDate = (
  date?: string,
  value = 1,
  unit: ManipulateType = TimeUnits.DAY,
  format: DateFormats = DateFormats.YYYY_MM_DD
) =>
  dayjs(isValid(date) ? date : undefined)
    .add(value, unit)
    .format(format);

export const subtractDate = (
  date?: string,
  value = 1,
  unit: ManipulateType = TimeUnits.DAY,
  format: DateFormats = DateFormats.YYYY_MM_DD
) =>
  dayjs(isValid(date) ? date : undefined)
    .subtract(value, unit)
    .format(format);

export const toShortDate = (date: string) => dayjs(date).format('YYYY-MM-DD');

export const toDayJsDate = (date: string) => dayjs(date);
