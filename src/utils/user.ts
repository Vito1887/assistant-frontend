export const getUserLanguage = () => navigator.language.split('-')[0];

export const isMobile =
  typeof navigator !== 'undefined'
    ? /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    : false;
