import { motion } from 'framer-motion';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { clsxm, useTranslations } from '@/utils';
import { projects } from '@/utils/dataset/projects.dataset';
import { slugify } from '@/utils/slugify';

const ProjectPage = () => {
  const { projects: projectsTranslations, general } = useTranslations();

  return (
    <Layout>
      <SectionWrapper>
        <motion.div className='mx-4 grid w-full max-w-6xl grid-cols-none gap-4 pt-16 sm:grid-cols-2 md:grid-cols-3'>
          {projects(projectsTranslations).map((project, index) => (
            <motion.div
              className='rounded-lg border p-4 shadow-md'
              key={project.title}
            >
              <h4 className='leading-[1.25rem]'>{project.title}</h4>
              <motion.p className='text-[0.6rem] leading-[0.7rem]'>
                {project.description}
              </motion.p>
              <div
                className={clsxm(
                  'mt-2 flex aspect-video overflow-hidden rounded-2xl bg-slate-800'
                )}
              >
                {project.header}
              </div>
              <motion.div className='mt-4'>
                <Button
                  href={`projects/${slugify(project.id)}`}
                  label={general.exploreDetails}
                  size='small'
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ProjectPage;
