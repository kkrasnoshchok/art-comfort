import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Markdown from 'react-markdown';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/button';
import { news } from '@/utils/dataset/news.dataset';
import { useTranslations } from '@/utils/locales';

const Page = () => {
  const { query, back } = useRouter();
  const { general, news: newsTranslations } = useTranslations();
  const memoizedNews = useMemo(
    () => news(newsTranslations),
    [newsTranslations]
  );
  const memoizedSingleNews = useMemo(
    () => memoizedNews.find((element) => element.id === query.slug),
    [memoizedNews, query.slug]
  );

  if (!memoizedSingleNews) {
    return null;
  }
  return (
    <Layout>
      <SectionWrapper>
        <motion.div className='w-full max-w-7xl gap-4 pt-16'>
          <motion.div>
            <Button label={general.backToList} onClick={back} size='small' />
          </motion.div>
          <motion.h3 className='mt-4 text-slate-900'>
            {memoizedSingleNews.title}
          </motion.h3>
          <motion.p className='text-sm'>
            {memoizedSingleNews.date.format('DD.MM.YYYY')}
          </motion.p>
          <motion.div className='mt-4 flex flex-col'>
            <motion.div className='flex aspect-square h-[440px] overflow-hidden rounded-lg bg-slate-900'>
              <Image
                src={memoizedSingleNews.url}
                alt={memoizedSingleNews.title}
                className='h-full w-full object-cover'
              />
            </motion.div>
            <motion.div className='mt-4 flex-1'>
              <Markdown
                components={{
                  ol: (props) => (
                    <ol
                      {...props}
                      style={{
                        listStyleType: 'decimal',
                        margin: '1rem 0 0 2rem',
                      }}
                    />
                  ),
                  p: (props) => <p {...props} style={{ marginTop: '1rem' }} />,
                }}
              >
                {memoizedSingleNews.description}
              </Markdown>
            </motion.div>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Page;
