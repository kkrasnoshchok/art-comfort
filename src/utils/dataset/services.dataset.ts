import { StaticImageData } from 'next/image';

// import equipmentSale from '@/assets/Climate_Control_Equipment_Sale.png';
import designingBackground from '@/assets/Sections_Designing.jpeg';
import installationBackground from '@/assets/Services_Installation.jpeg';
import maintenanceBackground from '@/assets/Services_Maintenance.jpg';
// import selectionAndDelivery from '@/assets/Selection_And_Delivery.jpg';
import supplyBackground from '@/assets/Services_Supply.jpeg';
import { TranslationType } from '@/utils/locales';

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  url: StaticImageData;
};

export const services = (t: TranslationType['services']): Service[] => [
  {
    id: 'design',
    title: t.design.title,
    subtitle: t.design.subtitle,
    description: t.design.description,
    longDescription: t.design.longDescription,
    url: designingBackground,
  },
  {
    id: 'supply',
    title: t.supply.title,
    subtitle: t.supply.subtitle,
    description: t.supply.description,
    longDescription: t.supply.longDescription,
    url: supplyBackground,
  },
  {
    id: 'installation',
    title: t.installation.title,
    subtitle: t.installation.subtitle,
    description: t.installation.description,
    longDescription: t.installation.longDescription,
    url: installationBackground,
  },
  {
    id: 'maintenance',
    title: t.maintenance.title,
    subtitle: t.maintenance.subtitle,
    description: t.maintenance.description,
    longDescription: t.maintenance.longDescription,
    url: maintenanceBackground,
  },
];
