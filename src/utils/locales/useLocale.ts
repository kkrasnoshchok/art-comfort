import { useLocalStorage } from 'usehooks-ts';

import { LOCALE_DEFAULT_VALUE, LOCALE_KEY } from './constants';
import { en, ua } from './translations';
import { TranslationType } from './translations/types';
import { LocaleType } from './types';

export const useLocale = () => {
  const [locale, updateLocale] = useLocalStorage<LocaleType>(
    LOCALE_KEY,
    LOCALE_DEFAULT_VALUE
  );
  return {
    locale,
    updateLocale,
  };
};

export const useTranslations = (): TranslationType => {
  const { locale } = useLocale();
  switch (locale.value) {
    case 'en':
      return en;
    case 'ua':
    default:
      return ua;
  }
};
