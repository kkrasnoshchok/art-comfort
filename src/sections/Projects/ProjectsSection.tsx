import { motion, Variants } from 'framer-motion';
import React, { useMemo } from 'react';

import { SectionWrapper } from '@/components/sectionWrapper';

import { BentoGrid } from '@/ui/aceternity';
import { Button } from '@/ui/Button';
import { useBreakpoint } from '@/utils';
import { projects } from '@/utils/dataset/projects.dataset';
import { useTranslations } from '@/utils/locales';

export const ProjectsSection = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };
  const { projects: projectsTranslations } = useTranslations();
  const projectsArray = useMemo(
    () => projects(projectsTranslations),
    [projectsTranslations]
  );
  const { isMd } = useBreakpoint('md');

  return (
    <SectionWrapper
      sectionProps={{ id: 'projects' }}
      className='relative flex flex-col items-center pb-0 md:mt-16'
    >
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2 }}
        className='mx-4'
      >
        <motion.h1 className='h2 w-full max-w-6xl text-left'>
          {projectsTranslations.title}
        </motion.h1>
        <BentoGrid className='mt-4'>
          {projectsArray
            .slice(0, isMd ? projectsArray.length : 3)
            .map((item, i) => (
              <BentoGrid.Item
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
              />
            ))}
        </BentoGrid>
        <motion.div className='mt-4 w-full max-w-6xl'>
          <Button
            label={projectsTranslations.showAllProjects}
            href='projects'
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
