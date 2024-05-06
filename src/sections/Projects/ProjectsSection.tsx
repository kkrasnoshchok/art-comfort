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
import { Button } from '@/ui/Button';
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

  return (
    <SectionWrapper
      sectionProps={{ id: 'projects' }}
      className='relative mt-16 flex flex-col items-center pb-0'
      innerClassName='bg-gradient-to-b'
    >
      <motion.h1 className='h2 w-full max-w-7xl text-left'>Проeкти</motion.h1>
      <BentoGridDemo />
      <motion.div className='mt-4 w-full max-w-7xl'>
        <Button label='Переглянути всі проєкти' href='projects' />
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
  return (
    <BentoGrid className='mt-4'>
      {items.map((item, i) => (
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

const items = [
  {
    title: 'Вентиляція',
    description: 'Свіже повітря цілий рік з нашими експертними рішеннями.',
    header: (
      <ProjectImage
        src={projectsVentilation}
        alt='Ventilation Type of Projects'
      />
    ),
    icon: <IconAperture className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Кондиціонування повітря',
    description: 'Прохолодність цілий рік з нашими експертними рішеннями.',
    header: (
      <ProjectImage
        src={projectsAirConditioning}
        alt='Air Conditioning type of Project'
      />
    ),
    icon: <IconAirConditioning className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Опалення',
    description: 'Тепло та комфорт з нашими експертними рішеннями.',
    header: (
      <ProjectImage src={projectsHeating} alt='Heating type of Project' />
    ),
    icon: <IconSun className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Очищення повітря',
    description: 'Легше дихання з нашими вдосконаленими системами.',
    header: (
      <ProjectImage src={projectsAirPurifier} alt='Heating type of Project' />
    ),
    icon: <MdAir className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Очищення води',
    description: 'Чиста та безпечна вода з нашими ефективними рішеннями.',
    header: (
      <ProjectImage
        src={projectsWaterTreatment}
        alt='Heating type of Project'
      />
    ),
    icon: <FaHandHoldingWater className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Зволоження повітря',
    description: 'Ідеальний рівень вологості для максимального комфорту.',
    header: (
      <ProjectImage src={projectsAirHumidifier} alt='Heating type of Project' />
    ),
    icon: <WiHumidity className='h-4 w-4 text-neutral-500' />,
  },
];

const ukrLocales = {
  ['Вентиляція']:
    'Перетворіть свій простір за допомогою наших експертних рішень для вентиляції, забезпечуючи свіже та здорове повітря цілий рік',
  ['Air Conditioning']:
    'Залишайтеся прохолодними цілий рік з нашими експертними рішеннями для кондиціонування повітря',
  ['Опалення']:
    'Відчуйте тепло та комфорт з нашими експертними рішеннями для опалення',
  ['Очищення повітря']:
    'Дихайте легше з нашими вдосконаленими системами очищення повітря',
  ['Очищення води']:
    'Насолоджуйтеся чистою та безпечною водою з нашими ефективними рішеннями для очищення',
  ['Сантехніка']:
    'Забезпечте безперебійну роботу вашої водопровідної системи за допомогою наших професійних послуг',
  ['Зволоження повітря']:
    'Підтримуйте ідеальний рівень вологості для максимального комфорту',
  ['Осушення басейну']:
    'Забезпечте приємне середовище за допомогою наших ефективних послуг з осушення басейну',
};

const engLocales = {
  ['Ventilation']:
    'Transform your space with our expert ventilation solutions, ensuring fresh and healthy air all year round',
  ['Air Conditioning']:
    'Stay cool all year round with our expert Air Conditioning solutions.',
  ['Heating']:
    'Experience warmth and comfort with our expert heating solutions.',
  ['Air Purification']:
    'Breathe easier with our advanced air purification systems.',
  ['Water Treatment']:
    'Enjoy clean and safe water with our efficient treatment solutions',
  ['Plumbing']:
    'Keep your plumbing systems flowing smoothly with our professional services.',
  ['Air Humidification']:
    'Maintain ideal humidity levels for ultimate comfort with our solutions.',
  ['Pool Dehumidification']:
    'Ensure a pleasant environment with our effective pool dehumidification services.',
};
// асейну;
