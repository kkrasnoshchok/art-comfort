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
    showMoreLabel: string;
    hideLabel: string;
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
};
