import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';
import Markdown from 'react-markdown';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { cn, useBreakpoint } from '@/utils';
import { news } from '@/utils/dataset/news.dataset';
import { useTranslations } from '@/utils/locales';

export const NewsSection = () => {
  const { isMd } = useBreakpoint('md');
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const { news: newsTranslations, general } = useTranslations();
  const memoizedNews = useMemo(
    () => news(newsTranslations),
    [newsTranslations]
  );

  return (
    <SectionWrapper sectionProps={{ id: 'news' }} className='pb-0'>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.5, easings: ['easeIn', 'easeOut'] }}
        className={cn('mx-4 flex w-full max-w-6xl flex-col bg-opacity-25 py-4')}
      >
        <h1 className='h2 text-grayscale-headerWeak'>
          {newsTranslations.title}
        </h1>
        {/* News Container */}
        <div className='relative flex-1'>
          {memoizedNews
            .slice(0, isMd ? news.length + 1 : 2)
            .map((item, index) => (
              <motion.div
                key={index}
                className={cn(
                  'group mt-2 flex flex-row rounded-3xl p-4',
                  'border-primary-defaultWeak border bg-gray-50 bg-opacity-50'
                )}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.5, once: true }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  easings: ['easeIn', 'easeOut'],
                }}
              >
                <div className='flex flex-1 flex-col'>
                  <Markdown className='lg:h4 text-grayscale-header text-xs md:text-sm'>
                    {item.title}
                  </Markdown>
                  <p className='text-grayscale-headerWeak mb-1 italic md:text-xs'>
                    {item.date.format('DD.MM.YYYY')}
                  </p>
                  {isMd && (
                    <Markdown className='text-grayscale-body text-sm'>
                      {item.description.split(' ').slice(0, 30).join(' ') +
                        '...'}
                    </Markdown>
                  )}
                  <div>
                    <Button
                      label={general.exploreDetails}
                      href={`/news/${item.id}`}
                      theme='primary'
                      size='small'
                      className='mt-4'
                    />
                  </div>
                </div>
                <div
                  className={cn(
                    'bg-grayscale-bgWeak',
                    'ml-4 flex aspect-video w-24 overflow-hidden rounded-2xl sm:w-60'
                  )}
                >
                  <Image
                    src={item.url}
                    className='h-full w-full object-cover'
                    alt={item.title}
                  />
                </div>
              </motion.div>
            ))}
        </div>
        <motion.div className='mt-8'>
          <Button label={newsTranslations.showAll} href='/news' />
          {/* <button className='border px-8 py-2 text-lg'>See all news</button> */}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
