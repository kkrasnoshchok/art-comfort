import { motion, Variants } from 'framer-motion';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { clsxm, useBreakpoint, useTranslations } from '@/utils';
import { news } from '@/utils/dataset/news.dataset';
import { slugify } from '@/utils/slugify';

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

  const { news: newsTranslations } = useTranslations();

  return (
    <SectionWrapper sectionProps={{ id: 'news' }} className='pb-0'>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.5, easings: ['easeIn', 'easeOut'] }}
        className={clsxm(
          'mx-4 flex w-full max-w-6xl flex-col bg-opacity-25 py-8'
        )}
      >
        <h1 className='h2 text-grayscale-headerWeak'>
          {newsTranslations.title}
        </h1>
        {/* News Container */}
        <div className='relative flex-1'>
          {news.slice(0, isMd ? news.length : 2).map((item, index) => (
            <motion.div
              key={index}
              className={clsxm(
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
              {/* News */}
              <div className='flex flex-1 flex-col'>
                <h3 className='md:h4 text-grayscale-header text-xs'>
                  {item.title}
                </h3>
                <p className='text-grayscale-headerWeak mb-1 italic'>
                  {item.date.format('DD.MM.YYYY')}
                </p>
                {isMd && (
                  <p className='text-grayscale-body text-sm'>
                    {item.description}
                  </p>
                )}
                <div>
                  <Button
                    label='Дізнатись деталі'
                    href={`/news/${slugify(item.title)}`}
                    theme='primary'
                    size='small'
                    className='mt-4'
                  />
                </div>
              </div>
              {/* Image */}
              <div
                className={clsxm(
                  'bg-grayscale-bgWeak',
                  'ml-4 flex aspect-video w-60 rounded-2xl'
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
