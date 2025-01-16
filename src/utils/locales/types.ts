const LocaleValues = {
  ua: 'ua',
  en: 'en',
} as const;

export type LocaleValue = (typeof LocaleValues)[keyof typeof LocaleValues];

export type LocaleType = {
  value: LocaleValue;
  emoji: string;
  label: string;
};
