import { DEFAULT_MENU_LANGUAGES as menuLanguages } from './constants';
import { en, ua } from './translations';
export type { TranslationType } from './translations/types';
import { useLocale, useTranslations } from './useLocale';
const languages = { en, ua };
export { languages, menuLanguages, useLocale, useTranslations };
