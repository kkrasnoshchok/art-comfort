export const Hrefs = {
  about: '#about',
  services: '#services',
  projects: '#projects',
  team: '#team',
  jobs: '#jobs',
  cerfitications: '#certifications',
  contacts: '#contacts',
} as const;

export type Href = (typeof Hrefs)[keyof typeof Hrefs];
