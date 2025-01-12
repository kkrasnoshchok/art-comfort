import { LocaleType } from './types';

export const LOCALE_KEY = 'locale';
export const LOCALE_DEFAULT_VALUE: LocaleType = {
  value: 'ua',
  label: 'Українська',
  emoji: '🇺🇦',
};

export const DEFAULT_MENU_LANGUAGES: LocaleType[] = [
  {
    value: 'ua',
    label: 'Українська',
    emoji: '🇺🇦',
  },
  {
    value: 'en',
    label: 'English',
    emoji: '🇬🇧',
  },
];
