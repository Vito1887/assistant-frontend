export enum PAGES {
  CALENDAR = '/calendar',
  TIMEZONE = '/timezone',

  ERROR_404 = '/error',

  // USER = '/:orderUID',
}

export const routes = Object.values(PAGES)
  .filter((page) => page !== PAGES.ERROR_404)
  .map((path) => ({ path }));

export type Pages = keyof typeof PAGES;
