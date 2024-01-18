import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';
import { news } from '@/utils/dataset/news.dataset';
import { slugify } from '@/utils/slugify';

const ProjectPage = () => {
  const router = useRouter();
  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const navigateBackToHome = () => {
    router.replace('/', undefined, { shallow: true, scroll: false });
  };
  return (
    <Layout>
      <motion.div className='from-primary-bg to-secondary-bg flex w-full items-center justify-center bg-gradient-to-b'>
        <motion.div className='w-11/12 rounded-lg pt-12'>
          <motion.div>
            <Button
              label='Повернутись на головну'
              onClick={navigateBackToHome}
            />
          </motion.div>
          <motion.h1 className='h1 text-primary-defaultStrong mt-8'>
            Список новин
          </motion.h1>
          <motion.div className='mt-8 pb-32'>
            {news.map((news) => (
              <motion.div
                className='border-primary-defaultStrong mt-4 flex items-center rounded-3xl border-2 p-4 backdrop-blur-lg'
                key={news.title}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.6, once: false }}
                transition={{ duration: 0.2 }}
              >
                <motion.div className='flex-1'>
                  <motion.h3 className='text-primary-defaultStrong'>
                    {news.title}
                  </motion.h3>
                  <p className='text-primary-defaultWeak mb-2 italic'>
                    {news.date.format('DD.MM.YYYY')}
                  </p>
                  <motion.p>{news.description}</motion.p>
                  <motion.div className='mt-4'>
                    <Button
                      href={`news/${slugify(news.title)}`}
                      label='Детальніше'
                    />
                  </motion.div>
                </motion.div>
                <div
                  className={clsxm(
                    'bg-primary-defaultStrong ml-4 flex aspect-video w-60 rounded-2xl border border-slate-500'
                  )}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ProjectPage;
