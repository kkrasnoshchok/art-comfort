import { DEFAULT_MENU_LANGUAGES as menuLanguages } from './constants';
import { en, pl, ua } from './translations';
export type { TranslationType } from './translations/types';
import { useLocale, useTranslations } from './useLocale';
const languages = { en, ua, pl };
export { languages, menuLanguages, useLocale, useTranslations };
