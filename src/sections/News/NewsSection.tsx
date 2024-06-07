import { motion, Variants } from 'framer-motion';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { cn, useBreakpoint, useTranslations } from '@/utils';
import { news } from '@/utils/dataset/news.dataset';
import { slugify } from '@/utils/slugify';

export const NewsSection = () => {
  const { isMd } = useBreakpoint('md');
  const { isLg } = useBreakpoint('lg');
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

  const { news: newsTranslations } = useTranslations();

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
          {news.slice(0, isMd ? news.length : 2).map((item, index) => (
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
                <h3 className='lg:h4 text-grayscale-header text-xs md:text-sm'>
                  {item.title}
                </h3>
                <p className='text-grayscale-headerWeak mb-1 italic md:text-xs'>
                  {item.date.format('DD.MM.YYYY')}
                </p>
                {isMd && (
                  <p className='text-grayscale-body text-sm'>
                    {isLg
                      ? item.description
                      : item.description.split(' ').slice(0, 8).join(' ') +
                        '...'}
                  </p>
                )}
                <div>
                  <Button
                    label='Дізнатись деталі'
                    href={`/news/${slugify(item.id)}`}
                    theme='primary'
                    size='small'
                    className='mt-4'
                  />
                </div>
              </div>
              <div
                className={cn(
                  'bg-grayscale-bgWeak',
                  'ml-4 flex aspect-video w-24 rounded-2xl sm:w-60'
                )}
              />
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
