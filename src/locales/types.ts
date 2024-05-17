export type LocaleKeysSkeleton = {
  general: {
    contactUs: string;
    exploreDetails: string;
  };
  header: Header;
  welcome: Welcome;
  services: Services;
  projects: Projects;
  statistics: Statistics;
  team: Team;
  news: News;
  contacts: Contacts;
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
  subtitle: string;
  servicesLabel: string;
};

type Contacts = {
  title: string;
  contactUsDirectly: string;
  leaveRequest: string;
  form: Form;
};

type Form = {
  name: FormInput;
  email: FormInput;
  phone: FormInput;
  message: FormInput;
  files: FormInput;
  send: string;
};

type FormInput = {
  label: string;
  error?: string;
};