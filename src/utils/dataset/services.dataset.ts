import { StaticImageData } from 'next/image';

// import equipmentSale from '@/assets/Climate_Control_Equipment_Sale.png';
import designingBackground from '@/assets/Sections_Designing.jpeg';
import installationBackground from '@/assets/Services_Installation.jpeg';
import maintenanceBackground from '@/assets/Services_Maintenance.jpg';
// import selectionAndDelivery from '@/assets/Selection_And_Delivery.jpg';
import supplyBackground from '@/assets/Services_Supply.jpeg';
import { TranslationType } from '@/locales/types';

export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: StaticImageData;
};

export const services = (t: TranslationType['services']): Service[] => [
  {
    id: 'design',
    title: t.design.title,
    description: t.design.description,
    longDescription: t.design.longDescription,
    url: designingBackground,
  },
  {
    id: 'supply',
    title: t.supply.title,
    description: t.supply.description,
    longDescription: t.supply.longDescription,
    url: supplyBackground,
  },
  {
    id: 'installation',
    title: t.installation.title,
    description: t.installation.description,
    longDescription: t.installation.longDescription,
    url: installationBackground,
  },
  {
    id: 'maintenance',
    title: t.maintenance.title,
    description: t.maintenance.description,
    longDescription: t.maintenance.longDescription,
    url: maintenanceBackground,
  },
];
