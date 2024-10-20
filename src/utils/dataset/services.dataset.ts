import { StaticImageData } from 'next/image';

import projectsAirPurifier from '@/assets/Projects_Air-Purifier.jpeg';
import projectsVentilation from '@/assets/Projects_Ventilation.jpg';
import installationBackground from '@/assets/Services_Installation.jpeg';
import maintenanceBackground from '@/assets/Services_Maintenance.jpg';

export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: StaticImageData;
};

export const services = [
  {
    id: 'installation',
    title: 'Montaż klimatyzacji',
    url: installationBackground,
  },
  {
    id: 'maintenance',
    title: 'Serwis klimatyzacji',
    url: maintenanceBackground,
  },
  {
    id: 'ventilation',
    title: 'Wentylacja',
    url: projectsVentilation,
  },
  {
    id: 'recuperation',
    title: 'Rekuperacja',
    url: projectsAirPurifier,
  },
];
