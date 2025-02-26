export const getCurrentDateForLocale = (locale: string) => new Date().toLocaleDateString(locale || 'en-GB').replaceAll('/', '.');
