import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import Markdown from 'react-markdown';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { news } from '@/utils/dataset/news.dataset';
import { useTranslations } from '@/utils/locales';

const NewsPage = () => {
  const router = useRouter();
  const navigateBackToHome = useCallback(() => {
    router.replace('/', undefined, { shallow: true, scroll: false });
  }, [router]);

  const { general, news: newsTranslations } = useTranslations();
  const memoizedNews = useMemo(
    () => news(newsTranslations),
    [newsTranslations]
  );

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
          <motion.h3 className='mt-8 text-slate-800'>
            {newsTranslations.pageTitle}
          </motion.h3>
          <motion.div className='mt-4 grid grid-cols-3 gap-4'>
            {memoizedNews.map((news) => (
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
                <div className='my-2 flex w-full overflow-hidden rounded-md bg-slate-900'>
                  <Image
                    src={news.url}
                    alt={news.title}
                    className='h-full w-full object-cover'
                  />
                </div>
                <Markdown className='mt-2 text-sm'>
                  {news.description?.split(' ').slice(0, 30).join(' ') + '...'}
                </Markdown>
                <motion.div className='mt-4 w-full'>
                  <Button
                    href={`news/${news.id}`}
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
