import { useLocalStorage } from 'usehooks-ts';

import { en, ua } from '@/locales';
import { LocaleKeysSkeleton } from '@/locales/types';

const LocaleValues = {
  ua: 'ua',
  en: 'en',
  de: 'de',
  pl: 'pl',
} as const;

type LocaleValue = (typeof LocaleValues)[keyof typeof LocaleValues];

export type LocaleType = {
  value: LocaleValue;
  emoji: string;
  label: string;
};

export const LOCALE_KEY = 'locale';
export const LOCALE_DEFAULT_VALUE: LocaleType = {
  value: 'ua',
  label: 'Українська',
  emoji: '🇺🇦',
};

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

export const useTranslations = (): LocaleKeysSkeleton => {
  const { locale } = useLocale();
  switch (locale.value) {
    case 'en':
      return en;
    case 'ua':
      return ua;
    // case 'de':
    //   return de
    // case 'pl':
    //   return pl
    default:
      return ua;
  }
};
