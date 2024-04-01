import { motion, Variants } from 'framer-motion';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';
import { news } from '@/utils/dataset/news.dataset';
import { slugify } from '@/utils/slugify';

export const NewsSection = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  return (
    <SectionWrapper
      sectionProps={{ id: 'news' }}
      className='pb-0'
      innerClassName='bg-gradient-to-b'
    >
      <motion.div
        // variants={sectionVariants}
        // initial='hidden'
        // whileInView='visible'
        // viewport={{ amount: 0.1, once: true }}
        className={clsxm('flex w-11/12 flex-col bg-opacity-25 py-8')}
      >
        <h1 className='h1 text-primary-defaultStrong'>Новини</h1>
        {/* News Container */}
        <div className='relative mt-4 flex-1'>
          {news.map((item, index) => (
            <motion.div
              key={index}
              className={clsxm(
                'group mt-4 flex flex-row rounded-3xl p-4',
                'border-primary-defaultWeak border bg-gray-50 bg-opacity-50'
              )}
              // variants={itemVariants}
              // initial='hidden'
              // whileInView='visible'
              // viewport={{ amount: 0.5, once: true }}
              transition={{ delay: 100 * index }}
            >
              {/* News */}
              <div className='flex flex-1 flex-col'>
                <h3 className='h3 text-primary-defaultStrong'>{item.title}</h3>
                <p className='text-primary-defaultWeak mb-2 italic'>
                  {item.date.format('DD.MM.YYYY')}
                </p>
                <p className='p text-primary-default'>{item.description}</p>
                <div>
                  <Button
                    label='Дізнатись деталі'
                    href={`/news/${slugify(item.title)}`}
                    theme='primary'
                    size='medium'
                    className='mt-4'
                  />
                </div>
              </div>
              {/* Image */}
              <div
                className={clsxm(
                  'bg-primary-defaultStrong border border-slate-500',
                  'ml-4 flex aspect-video w-60 rounded-2xl'
                )}
              />
            </motion.div>
          ))}
        </div>
        <motion.div className='mt-8'>
          <Button label='Подивитись всі новини' href='/news' />
          {/* <button className='border px-8 py-2 text-lg'>See all news</button> */}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
