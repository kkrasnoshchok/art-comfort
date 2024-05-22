import {
  IconAirConditioning,
  IconAperture,
  IconSun,
} from '@tabler/icons-react';
import Image, { StaticImageData } from 'next/image';
import { FaHandHoldingWater } from 'react-icons/fa';
import { MdAir } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';

import projectsAirConditioning from '@/assets/Projects_Air-Conditioning.jpeg';
import projectsAirHumidifier from '@/assets/Projects_Air-Humidifier.jpeg';
import projectsAirPurifier from '@/assets/Projects_Air-Purifier.jpeg';
import projectsHeating from '@/assets/Projects_Heating.jpeg';
import projectsVentilation from '@/assets/Projects_Ventilation.jpg';
import projectsWaterTreatment from '@/assets/Projects_WaterTreatment.jpeg';
import { LocaleKeysSkeleton } from '@/locales/types';
import { cn } from '@/utils/cn';

type ProjectImageProps = {
  src: StaticImageData;
  className?: string;
  alt: string;
};

const ProjectImage = (props: ProjectImageProps) => {
  const { alt, src, className } = props;
  return (
    <div className='from-grayscale-header to-grayscale-body flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800'>
      <Image
        alt={alt}
        src={src}
        className={cn('bg-contain object-cover opacity-20', className)}
      />
    </div>
  );
};

export const projects = (t: LocaleKeysSkeleton['projects']) => [
  {
    id: 'ventilation',
    title: t.ventilation.title,
    description: t.ventilation.description,
    longDescription: t.ventilation.longDescription,
    header: (
      <ProjectImage
        src={projectsVentilation}
        alt='Ventilation Type of Projects'
      />
    ),
    icon: <IconAperture className='h-4 w-4 text-neutral-500' />,
  },
  {
    id: 'airConditioning',
    title: t.airConditioning.title,
    description: t.airConditioning.description,
    longDescription: t.airConditioning.longDescription,
    header: (
      <ProjectImage
        src={projectsAirConditioning}
        alt='Air Conditioning type of Project'
      />
    ),
    icon: <IconAirConditioning className='h-4 w-4 text-neutral-500' />,
  },
  {
    id: 'heating',
    title: t.heating.title,
    description: t.heating.description,
    longDescription: t.heating.longDescription,
    header: (
      <ProjectImage src={projectsHeating} alt='Heating type of Project' />
    ),
    icon: <IconSun className='h-4 w-4 text-neutral-500' />,
  },
  {
    id: 'airPurifying',
    title: t.airPurifying.title,
    description: t.airPurifying.description,
    longDescription: t.airPurifying.longDescription,
    header: (
      <ProjectImage src={projectsAirPurifier} alt='Heating type of Project' />
    ),
    icon: <MdAir className='h-4 w-4 text-neutral-500' />,
  },
  {
    id: 'waterTreatment',
    title: t.waterTreatment.title,
    description: t.waterTreatment.description,
    longDescription: t.waterTreatment.longDescription,
    header: (
      <ProjectImage
        src={projectsWaterTreatment}
        alt='Heating type of Project'
      />
    ),
    icon: <FaHandHoldingWater className='h-4 w-4 text-neutral-500' />,
  },
  {
    id: 'airHumidifying',
    title: t.airHumidifying.title,
    description: t.airHumidifying.description,
    longDescription: t.airHumidifying.longDescription,
    header: (
      <ProjectImage src={projectsAirHumidifier} alt='Heating type of Project' />
    ),
    icon: <WiHumidity className='h-4 w-4 text-neutral-500' />,
  },
];
