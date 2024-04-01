import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { SectionWrapper } from '@/components/sectionWrapper';
import { StatisticsContainer } from '@/components/statistics';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

import { Button } from '@/ui/Button';

const MotionLink = motion(Link);

export const ProjectsSection = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  const statisticsVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, type: 'spring' },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <SectionWrapper
      sectionProps={{ id: 'projects' }}
      className='relative mt-16 flex flex-col items-center pb-0'
      innerClassName='bg-gradient-to-b'
    >
      <motion.h1 className='h2 w-full max-w-7xl text-left'>
        Знакові Проєкти
      </motion.h1>
      <BentoGridDemo />
      <motion.div className='mt-4'>
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
      {/* <motion.div
        variants={partnersVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className='mt-12'
      >
        <PartnersSection />
      </motion.div> */}
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
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className='from-grayscale-header to-grayscale-body flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800'></div>
);
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />,
  },
];
