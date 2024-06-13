import { TranslationType } from '@/utils/locales';

export type Vacancy = {
  id: string;
  jobTitle: string;
  location: string;
  shortDescription: string;
  longDescription: string;
};

type VacancyColumn = {
  key: keyof Omit<Vacancy, 'longDescription'>;
  header: string;
};

export const vacanciesColumns = (
  t: TranslationType['vacancies']
): VacancyColumn[] => [
  { key: 'jobTitle', header: t.vacancyNamePlaceholder },
  { key: 'location', header: t.vacancyLocationPlaceholder },
];

export const vacancies: Vacancy[] = [
  {
    id: '1a2b3c4d5e',
    jobTitle: 'Інженер-Проєктувальник систем ОВіК',
    location: 'Київ, Україна',
    shortDescription:
      'Проектування систем вентиляції, кондиціонування, зволоження, осушення повітря, опалення',
    longDescription:
      "We're looking for an experienced HVAC Engineer to join our team. In this role, you'll be responsible for designing, installing, and maintaining HVAC systems to ensure optimal performance and efficiency. If you're passionate about HVAC engineering and have the skills to deliver high-quality solutions, we want to hear from you!",
  },
  {
    id: '1a2b3c4d5eaue',
    jobTitle: 'Монтажник систем вентиляції та кондиціонування повітря',
    location: 'Київ, Україна',
    shortDescription:
      'Виконання робіт з монтажу систем вентиляції та кондиціонування повітря',
    longDescription:
      "We're hiring an Installer of Ventilation and Air Conditioning Systems to join our installation team. If you have experience in HVAC system installation and maintenance and are looking for a new opportunity, we want to hear from you!",
  },
];
