import { LocaleType } from './types';

export const LOCALE_KEY = 'locale';
export const LOCALE_DEFAULT_VALUE: LocaleType = {
  value: 'pl',
  label: 'Polska',
  emoji: '🇵🇱',
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
  {
    value: 'de',
    label: 'Deutsch',
    emoji: '🇩🇪',
  },
  {
    value: 'pl',
    label: 'Polska',
    emoji: '🇵🇱',
  },
];
