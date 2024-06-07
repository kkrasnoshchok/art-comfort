import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { news } from '@/utils/dataset/news.dataset';
import { useTranslations } from '@/utils/locales';

const Page = () => {
  const { query, back } = useRouter();
  const { general } = useTranslations();
  const singleNews = news.find((element) => element.id === query.slug);

  if (!singleNews) {
    return null;
  }
  return (
    <Layout>
      <SectionWrapper>
        <motion.div className='w-full max-w-6xl gap-4 pt-16'>
          <motion.div>
            <Button label={general.backToList} onClick={back} size='small' />
          </motion.div>
          <motion.h3 className='mt-4 text-slate-900'>
            {singleNews.title}
          </motion.h3>
          <motion.p className='text-sm'>
            {singleNews.date.format('DD.MM.YYYY')}
          </motion.p>
          <motion.div className='mt-4 flex'>
            <motion.div className='flex aspect-square h-96 w-1/2 overflow-hidden rounded-lg bg-slate-900' />
            <motion.div className='ml-4 flex-1'>
              {singleNews.description}
            </motion.div>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Page;
