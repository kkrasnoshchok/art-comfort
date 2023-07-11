import { useRouter } from 'next/router';

import { en, ua } from '@/locales';

export const useI18n = () => {
  const { locale } = useRouter();
  return { t: locale === 'en' ? en : ua };
};
