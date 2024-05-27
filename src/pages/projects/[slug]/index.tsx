import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { useTranslations } from '@/utils';
import { projects } from '@/utils/dataset/projects.dataset';
import { slugify } from '@/utils/slugify';

const ProjectPage = () => {
  const router = useRouter();
  const { projects: projectsTranslations } = useTranslations();
  const project = projects(projectsTranslations).find(
    (project) => slugify(project.id) === router.query.slug
  );
  if (!project) {
    return null;
  }
  return (
    <Layout>
      <SectionWrapper>
        <motion.div className='grid w-full max-w-6xl gap-4 pt-16'>
          <div className='w-full'>
            <motion.div>
              <Button size='small' label='Back' onClick={router.back} />
            </motion.div>
            <motion.h3 className='text-primary-defaultStrong mt-4'>
              {project.title}
            </motion.h3>
            <div className='mt-4 flex w-full flex-row'>
              {/* Long Details */}
              <motion.p className='text-primary-defaultWeak w-1/2 pr-8'>
                {project.longDescription}
              </motion.p>
              <div className='aspect-video h-full w-1/2'>{project.header}</div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ProjectPage;
