export enum PAGES {
  USER = '/user',
  CALENDAR = '/calendar',
  TIMEZONE = '/timezone',

  ERROR_404 = '/error',
}

export const routes = Object.values(PAGES)
  .filter((page) => page !== PAGES.ERROR_404)
  .map((path) => ({ path }));

export type Pages = keyof typeof PAGES;
