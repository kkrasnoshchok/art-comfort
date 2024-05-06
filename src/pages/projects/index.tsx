import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';
import { projects } from '@/utils/dataset/projects.dataset';
import { slugify } from '@/utils/slugify';

const ProjectPage = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Layout>
      <SectionWrapper>
        <motion.div className='grid w-full max-w-7xl grid-cols-3 gap-4 pt-16'>
          {projects.map((project) => (
            <motion.div
              className='rounded-lg border p-4 shadow-md'
              key={project.title}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.6, once: false }}
              transition={{ duration: 0.2 }}
            >
              <h4 className=''>{project.title}</h4>
              <p className='text-primary-defaultWeak mb-2 text-sm italic'>
                {project.year}
              </p>
              <motion.p className='text-sm'>{project.details}</motion.p>
              <div
                className={clsxm(
                  'bg-primary-defaultStrong mt-4 flex aspect-video overflow-hidden rounded-2xl border border-slate-500'
                )}
              >
                <Image
                  src={project.url}
                  className='aspect-video h-full w-full object-cover opacity-40 transition-all group-hover:opacity-100'
                  alt={project.title}
                />
              </div>
              <motion.div className='mt-2'>
                <Button
                  href={`projects/${slugify(project.title)}`}
                  label='Детальніше'
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
