import { motion, Variants } from 'framer-motion';
import React from 'react';

import { SectionWrapper } from '@/components/sectionWrapper';
import { StatisticsContainer } from '@/components/statistics';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

import { Button } from '@/ui/Button';
import { useTranslations } from '@/utils';
import { projects } from '@/utils/dataset/projects.dataset';

export const ProjectsSection = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };
  const statisticsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };
  const { projects: projectsTranslations } = useTranslations();

  return (
    <SectionWrapper
      sectionProps={{ id: 'projects' }}
      className='relative mt-16 flex flex-col items-center pb-0'
      innerClassName='bg-gradient-to-b'
    >
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2 }}
      >
        <motion.h1 className='h2 w-full max-w-7xl text-left'>
          {projectsTranslations.title}
        </motion.h1>
        <BentoGrid className='mt-4'>
          {projects(projectsTranslations).map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
        <motion.div className='mt-4 w-full max-w-7xl'>
          <Button
            label={projectsTranslations.showAllProjects}
            href='projects'
          />
        </motion.div>
        <motion.div
          variants={statisticsVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 1 }}
          className='w-full max-w-7xl'
        >
          <StatisticsContainer />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
