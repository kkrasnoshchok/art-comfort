import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';
import { projects } from '@/utils/dataset/projects.dataset';
import { slugify } from '@/utils/slugify';

const ProjectPage = () => {
  const router = useRouter();
  const project = projects.find(
    (project) => slugify(project.title) === router.query.slug
  );
  if (!project) {
    return null;
  }
  return (
    <Layout>
      <motion.div
        className={clsxm(
          'flex w-full flex-col items-start px-16 pb-24 pt-12'
          // 'from-primary-bg to-secondary-bg bg-gradient-to-b'
        )}
      >
        <div
          className={clsxm(
            'w-full p-8'
            // 'border-primary-bgStrong bg-gray-50 bg-opacity-25 shadow-lg backdrop-blur-lg rounded-3xl border-2'
          )}
        >
          <motion.div>
            <Button label='Back' onClick={router.back} />
          </motion.div>
          <motion.h1 className='text-primary-defaultStrong mt-8'>
            {project.title}
          </motion.h1>
          <motion.p className='text-primary-defaultWeak italic'>
            {project.year}
          </motion.p>
          {/* Long Details */}
          <motion.p className='text-primary-defaultWeak mt-8'>
            {project.longDetails}
          </motion.p>
          {/* Images Grid */}
          <motion.div className='grid-row mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <motion.div
                  key={`image_${index}`}
                  className={clsxm([
                    'bg-primary-defaultStrong flex aspect-square h-full w-full overflow-hidden rounded-3xl border-slate-500',
                    index === 2 && 'col-span-2 row-span-2',
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
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ProjectPage;
