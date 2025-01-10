import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { projects } from '@/utils/dataset/projects.dataset';
import { useTranslations } from '@/utils/locales';

const ProjectPage = () => {
  const router = useRouter();
  const { projects: projectsTranslations } = useTranslations();
  const project = projects(projectsTranslations).find(
    (project) => project.id === router.query.slug
  );
  if (!project) {
    return null;
  }
  return (
    <Layout>
      <SectionWrapper>
        <motion.div className='mx-4 w-full max-w-6xl pt-16'>
          <motion.div>
            <Button size='small' label='Back' onClick={router.back} />
          </motion.div>
          <motion.h3 className='text-primary-defaultStrong mt-4'>
            {project.title}
          </motion.h3>
          <div className='mt-4 flex w-full flex-col gap-4 md:flex-row'>
            <motion.p className='text-primary-defaultWeak pr-8'>
              {project.longDescription}
            </motion.p>
            <div className='aspect-video h-full md:min-w-[50%]'>
              {project.header}
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ProjectPage;
