import { motion, Variants } from 'framer-motion';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { clsxm, useTranslations } from '@/utils';
import { projects } from '@/utils/dataset/projects.dataset';
import { slugify } from '@/utils/slugify';

const ProjectPage = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const { projects: projectsTranslations, general } = useTranslations();

  return (
    <Layout>
      <SectionWrapper>
        <motion.div className='grid w-full max-w-6xl grid-cols-3 gap-4 pt-16'>
          {projects(projectsTranslations).map((project, index) => (
            <motion.div
              className='rounded-lg border p-4 shadow-md'
              key={project.title}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.6, once: false }}
              transition={{ duration: 0.2, delay: index * 0.1 + 0.5 }}
            >
              <h4>{project.title}</h4>
              <motion.p className='text-[10px]'>{project.description}</motion.p>
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
