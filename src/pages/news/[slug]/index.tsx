import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';
import { news } from '@/utils/dataset/news.dataset';
import { slugify } from '@/utils/slugify';

const Page = () => {
  const { query, back } = useRouter();
  const singleNews = news.find(
    (element) => slugify(element.title) === query.slug
  );

  if (!singleNews) {
    return null;
  }
  return (
    <Layout>
      <motion.div className='from-primary-bg to-secondary-bg flex min-h-screen w-full flex-col items-start bg-gradient-to-b px-16 pb-24 pt-12'>
        <div className='border-primary-bgStrong w-full rounded-3xl border-2 bg-gray-50 bg-opacity-25 p-8 shadow-lg backdrop-blur-lg'>
          <motion.div>
            <Button label='Back' onClick={back} />
          </motion.div>
          <motion.h1 className='text-primary-defaultStrong mt-8'>
            {singleNews.title}
          </motion.h1>
          <motion.p className='text-primary-defaultWeak italic'>
            {singleNews.date.format('DD-MM-YYYY')}
          </motion.p>
          <motion.div className='flex'>
            <motion.div className='mr-4 mt-4 flex-1'>
              {singleNews.description}
            </motion.div>
            {/* Images Grid */}
            <motion.div
              className={clsxm([
                'bg-primary-defaultStrong flex aspect-square h-48 w-48 overflow-hidden rounded-3xl border-slate-500',
              ])}
            />
            {/* <motion.div className='grid-row mt-8 grid grid-cols-2 grid-rows-2 gap-8'>
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  
                ))}
            </motion.div> */}
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Page;
