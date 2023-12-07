import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { SectionWrapper } from '@/components/sectionWrapper';
import { StatisticsContainer } from '@/components/statistics';

import { PartnersSection } from '@/sections/Partners';
import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';
import { projects } from '@/utils/dataset/projects.dataset';
import { slugify } from '@/utils/slugify';

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

  const partnersVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, type: 'spring', delay: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper
      sectionProps={{ id: 'projects' }}
      className='relative flex flex-col items-center pb-0'
      innerClassName='bg-gradient-to-b'
    >
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className='border-primary-bg flex w-11/12 flex-col rounded-[36px] border-2 bg-gray-50 bg-opacity-25 p-8 shadow-xl backdrop-blur-2xl'
      >
        <motion.h1 className='h1 text-primary-default'>
          Знакові Проєкти
        </motion.h1>
        {/* Projects container */}
        <motion.div
          className={clsxm(
            'relative mt-8 flex-1 gap-7',
            'grid-row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          )}
        >
          {projects.slice(0, 5).map((project, index) => {
            return (
              <MotionLink
                href={`projects/${slugify(project.title)}`}
                key={index}
                className={clsxm(
                  'project-card bg-primary-defaultStrong relative flex flex-col items-start overflow-hidden rounded-3xl',
                  'group',
                  index === 0 && 'col-span-2 row-span-2'
                )}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, type: 'spring' },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.3, type: 'spring' },
                }}
                viewport={{ amount: 0.1, once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Project Image */}
                <div
                  className={clsxm([
                    'bg-primary-defaultStrong flex aspect-square h-full w-full border-slate-500',
                  ])}
                >
                  <Image
                    src={project.url}
                    className={clsxm(
                      'aspect-square h-full w-full object-cover',
                      'opacity-20 transition-all group-hover:scale-110 group-hover:opacity-10'
                    )}
                    alt={project.title}
                  />
                </div>
                {/* Project Title */}
                <div className='absolute top-1/2 w-full -translate-y-1/2 px-8'>
                  <h4 className='h3 text-primary-bg mb-2 text-center font-normal'>
                    {project.title}
                  </h4>
                </div>
              </MotionLink>
            );
          })}
        </motion.div>
        <motion.div className='mt-4'>
          <Button label='Переглянути всі проєкти' href='projects' />
        </motion.div>
      </motion.div>
      <motion.div
        variants={statisticsVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 1, once: true }}
        className='w-11/12'
      >
        <StatisticsContainer />
      </motion.div>
      <motion.div
        variants={partnersVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className='mt-12'
      >
        <PartnersSection />
      </motion.div>
    </SectionWrapper>
  );
};
