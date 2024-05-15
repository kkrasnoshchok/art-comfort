import {
  IconAirConditioning,
  IconAperture,
  IconSun,
} from '@tabler/icons-react';
import { motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaHandHoldingWater } from 'react-icons/fa';
import { MdAir } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';

import { SectionWrapper } from '@/components/sectionWrapper';
import { StatisticsContainer } from '@/components/statistics';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

import projectsAirConditioning from '@/assets/Projects_Air-Conditioning.jpeg';
import projectsAirHumidifier from '@/assets/Projects_Air-Humidifier.jpeg';
import projectsAirPurifier from '@/assets/Projects_Air-Purifier.jpeg';
import projectsHeating from '@/assets/Projects_Heating.jpeg';
import projectsVentilation from '@/assets/Projects_Ventilation.jpg';
import projectsWaterTreatment from '@/assets/Projects_WaterTreatment.jpeg';
import { LocaleKeysSkeleton } from '@/locales/types';
import { Button } from '@/ui/Button';
import { useTranslations } from '@/utils';
import { cn } from '@/utils/cn';

export const ProjectsSection = () => {
  const statisticsVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, type: 'spring' },
    },
  };
  const { projects } = useTranslations();

  return (
    <SectionWrapper
      sectionProps={{ id: 'projects' }}
      className='relative mt-16 flex flex-col items-center pb-0'
      innerClassName='bg-gradient-to-b'
    >
      <motion.h1 className='h2 w-full max-w-7xl text-left'>
        {projects.title}
      </motion.h1>
      <BentoGridDemo />
      <motion.div className='mt-4 w-full max-w-7xl'>
        <Button label={projects.showAllProjects} href='projects' />
      </motion.div>
      {/* <OldProjectsSection /> */}
      <motion.div
        variants={statisticsVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 1, once: true }}
        className='w-full max-w-7xl'
      >
        <StatisticsContainer />
      </motion.div>
    </SectionWrapper>
  );
};

export function BentoGridDemo() {
  const { projects } = useTranslations();
  return (
    <BentoGrid className='mt-4'>
      {items(projects).map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          // className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}

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

const items = (t: LocaleKeysSkeleton['projects']) => [
  {
    title: t.ventilation.title,
    description: t.ventilation.description,
    header: (
      <ProjectImage
        src={projectsVentilation}
        alt='Ventilation Type of Projects'
      />
    ),
    icon: <IconAperture className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: t.airConditioning.title,
    description: t.airConditioning.description,
    header: (
      <ProjectImage
        src={projectsAirConditioning}
        alt='Air Conditioning type of Project'
      />
    ),
    icon: <IconAirConditioning className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: t.heating.title,
    description: t.heating.description,
    header: (
      <ProjectImage src={projectsHeating} alt='Heating type of Project' />
    ),
    icon: <IconSun className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: t.airPurifying.title,
    description: t.airPurifying.description,
    header: (
      <ProjectImage src={projectsAirPurifier} alt='Heating type of Project' />
    ),
    icon: <MdAir className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: t.waterTreatment.title,
    description: t.waterTreatment.description,
    header: (
      <ProjectImage
        src={projectsWaterTreatment}
        alt='Heating type of Project'
      />
    ),
    icon: <FaHandHoldingWater className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: t.airHumidifying.title,
    description: t.airHumidifying.description,
    header: (
      <ProjectImage src={projectsAirHumidifier} alt='Heating type of Project' />
    ),
    icon: <WiHumidity className='h-4 w-4 text-neutral-500' />,
  },
];
