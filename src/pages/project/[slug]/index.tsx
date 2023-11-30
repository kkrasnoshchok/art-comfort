import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const ProjectsPage = () => {
  const router = useRouter();
  return (
    <motion.div
      layoutId={`project-${router.query.slug as string}`}
      className=''
    >
      <div className='bg-primary-defaultStrong rounded-lg p-8'>
        Project Card of {router.query.slug}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
