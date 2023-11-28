import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';

import { mockNews } from '@/sections/News/NewsSection';

const Page = () => {
  const { query, back } = useRouter();
  const singleNews = mockNews.find((element) => element.id === query.slug);
  return (
    <Layout>
      <motion.section className='px-6 py-24'>
        {!singleNews && (
          <div>
            <h1>We haven't found such news :(((</h1>
            <motion.button onClick={back}>return to home</motion.button>
          </div>
        )}
        {singleNews && (
          <>
            <h1>Single News Page</h1>
            <h3 className='mt-8'>{singleNews.title}</h3>
            <p>{singleNews.date.format('DD-MM-YYYY')}</p>
            <p>{singleNews.description}</p>
          </>
        )}
      </motion.section>
    </Layout>
  );
};

export default Page;
