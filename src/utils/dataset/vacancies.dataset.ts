import { TranslationType } from '@/utils/locales';

export type Vacancy = {
  id: string;
  name: string;
  introduction: string;
  requirements: string;
  importantForUs: string;
  weOffer: string;
  jobBoardsLinks: string;
};

type VacancyColumn = {
  key: keyof Omit<Vacancy, 'longDescription'>;
  header: string;
};

export const vacanciesColumns = (
  t: TranslationType['vacancies']
): VacancyColumn[] => [{ key: 'name', header: t.vacancyNamePlaceholder }];

export const vacancies = (t: TranslationType['vacancies']): Vacancy[] => [
  {
    id: 'projects-lead',
    name: t.projectsLeadLabel,
    introduction: t.projectsLeadIntroduction,
    importantForUs: t.projectsLeadImportantForUs,
    requirements: t.projectsLeadRequirements,
    weOffer: t.projectsLeadWeOffer,
    jobBoardsLinks: t.projectsLeadJobBoards,
  },
  {
    id: 'website-marketer',
    name: t.marketerLabel,
    introduction: t.marketerIntroduction,
    importantForUs: t.marketerImportantForUs,
    requirements: t.marketerRequirements,
    weOffer: t.marketerWeOffer,
    jobBoardsLinks: t.marketerJobBoards,
  },
  {
    id: 'customer-service-manager',
    name: t.csmLabel,
    introduction: t.csmIntroduction,
    importantForUs: t.csmImportantForUs,
    requirements: t.csmRequirements,
    weOffer: t.csmWeOffer,
    jobBoardsLinks: t.csmJobBoards,
  },
  {
    id: 'hvac-installer',
    name: t.installerLabel,
    introduction: t.installerIntroduction,
    importantForUs: t.installerImportantForUs,
    requirements: t.installerRequirements,
    weOffer: t.installerWeOffer,
    jobBoardsLinks: t.installerJobBoards,
  },
  {
    id: 'hvac-system-design-engineer',
    name: t.hdeLabel,
    introduction: t.hdeIntroduction,
    importantForUs: t.hdeImportantForUs,
    requirements: t.hdeRequirements,
    weOffer: t.hdeWeOffer,
    jobBoardsLinks: t.hdeJobBoards,
  },
];
