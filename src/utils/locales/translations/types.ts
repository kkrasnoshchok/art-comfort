export type TranslationType = {
  general: {
    contactUs: string;
    exploreDetails: string;
    backToMain: string;
    backToList: string;
  };
  header: Header;
  welcome: Welcome;
  services: Services;
  projects: Projects;
  statistics: Statistics;
  team: Team;
  news: News;
  contacts: Contacts;
  form: Form;
  vacancies: Vacancies;
  about: {
    licensesTitle: string;
    aboutUsContent: string;
    missionContent: string;
    visionContent: string;
    whyWeContent: string;
    servicesContent: string;
    teamContent: string;
    ourValuesContent: string;
  };
};

type Header = {
  about: string;
  aboutTooltip: string;
  services: string;
  servicesTooltip: string;
  projects: string;
  projectsTooltip: string;
  contacts: string;
  contactsTooltip: string;
  careers: string;
  carrersTooltip: string;
  news: string;
  newsTooltip: string;
};

type News = {
  title: string;
  showAll: string;
  pageTitle: string;
  // innovations
  newsHvacInnovationsTitle: string;
  newsHvacInnovationsContent: string;
  // seasonal
  newsSeasonalRecommendationsTitle: string;
  newsSeasonalRecommendationsContent: string;
};

type Projects = {
  title: string;
  ventilation: ProjectType;
  airConditioning: ProjectType;
  heating: ProjectType;
  airPurifying: ProjectType;
  waterTreatment: ProjectType;
  airHumidifying: ProjectType;
  showAllProjects: string;
};

type ProjectType = {
  title: string;
  description: string;
  longDescription: string;
};

type Services = {
  title: string;
  design: ServiceType;
  supply: ServiceType;
  installation: ServiceType;
  maintenance: ServiceType;
  exploreServices: string;
};

type ServiceType = {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
};

type Statistics = {
  experience: string;
  projects: string;
  clients: string;
};

type Team = {
  title: string;
};

type Welcome = {
  title: string;
  titleNaming: string;
  subtitle: string;
  servicesLabel: string;
};

type Contacts = {
  title: string;
  contactUsDirectly: string;
  leaveRequest: string;
  locationLabel: string;
};

type Form = {
  name: FormInput;
  email: FormInput;
  phone: FormInput;
  message: FormInput;
  motivationMessage: FormInput;
  files: FormInput;
  send: string;
};

type FormInput = {
  label: string;
  error?: string;
  invalidError?: string;
};

type Vacancies = {
  openPositions: string;
  searchVacanciesPlaceholder: string;
  vacancyNamePlaceholder: string;
  vacancyLocationPlaceholder: string;
  hrData: string;
  importantForUsLabel: string;
  requirementsLabel: string;
  weOfferLabel: string;
  jobBoardsLabel: string;
  baseIntroduction: string;
  // Projects Lead
  projectsLeadLabel: string;
  projectsLeadIntroduction: string;
  projectsLeadImportantForUs: string;
  projectsLeadRequirements: string;
  projectsLeadWeOffer: string;
  projectsLeadJobBoards: string;
  // Marketer
  marketerLabel: string;
  marketerIntroduction: string;
  marketerImportantForUs: string;
  marketerRequirements: string;
  marketerWeOffer: string;
  marketerJobBoards: string;
  // CSM
  csmLabel: string;
  csmIntroduction: string;
  csmImportantForUs: string;
  csmRequirements: string;
  csmWeOffer: string;
  csmJobBoards: string;
  // Installer
  installerLabel: string;
  installerIntroduction: string;
  installerImportantForUs: string;
  installerRequirements: string;
  installerWeOffer: string;
  installerJobBoards: string;
  // HDE
  hdeLabel: string;
  hdeIntroduction: string;
  hdeImportantForUs: string;
  hdeRequirements: string;
  hdeWeOffer: string;
  hdeJobBoards: string;
};
