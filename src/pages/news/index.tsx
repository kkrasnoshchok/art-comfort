import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { useTranslations } from '@/utils';
import { news } from '@/utils/dataset/news.dataset';
import { slugify } from '@/utils/slugify';

const NewsPage = () => {
  const router = useRouter();
  const navigateBackToHome = useCallback(() => {
    router.replace('/', undefined, { shallow: true, scroll: false });
  }, [router]);

  const { general } = useTranslations();

  return (
    <Layout>
      <SectionWrapper>
        <motion.div className='w-full max-w-7xl gap-4 pt-16'>
          <motion.div>
            <Button
              label={general.backToMain}
              onClick={navigateBackToHome}
              size='small'
            />
          </motion.div>
          <motion.h3 className='mt-8 text-slate-800'>Список новин</motion.h3>
          <motion.div className='mt-4 grid grid-cols-3 gap-4'>
            {news.map((news) => (
              <motion.div
                className='border-primary-defaultStrong flex flex-col items-center rounded-lg border p-4 backdrop-blur-lg'
                key={news.title}
              >
                <motion.p className='text-md font-bold text-slate-700'>
                  {news.title}
                </motion.p>
                <p className='w-full text-left text-xs text-slate-600'>
                  {news.date.format('DD.MM.YYYY')}
                </p>
                <div className='my-2 flex aspect-video w-full rounded-md bg-slate-900' />
                <motion.p className='mt-2 text-sm'>{news.description}</motion.p>
                <motion.div className='mt-4 w-full'>
                  <Button
                    href={`news/${slugify(news.id)}`}
                    label={general.exploreDetails}
                    size='small'
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default NewsPage;
