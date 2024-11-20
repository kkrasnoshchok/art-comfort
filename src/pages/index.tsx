import { motion } from 'framer-motion';

import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@/components/layout';
import { StatisticsContainer } from '@/components/statistics';

import { ContactsSection } from '@/sections/Contacts';
import { InfoSection } from '@/sections/Info';
import { NewsListSection, NewsSection } from '@/sections/News';
import { RealisationSection } from '@/sections/Realisation';
import { ServicesListSection, ServicesSection } from '@/sections/Services';
import { Seo } from '@/seo';
import { Button } from '@/ui/Button';
import { cn } from '@/utils';

const HomePage = () => {
  return (
    <Layout>
      <Seo />
      <motion.div className='flex h-full w-full justify-center'>
        <main className='flex h-full w-full flex-col items-center justify-center'>
          <ServicesSection />
          <InfoSection />
          {/* Projects should be realisation */}
          {/* <ProjectsSection /> */}
          <div className='mt-8 grid w-full max-w-6xl grid-cols-3 gap-6'>
            <RealisationSection />
            <ServicesListSection />
            <NewsListSection />
          </div>
          <div
            className={cn(
              'discover-more-controls',
              'flex w-full max-w-6xl flex-row justify-between',
              'mt-4'
            )}
          >
            <div className='flex-1'>
              <Button label='Zobacz więcej' />
            </div>
            <div className='flex-1'>
              <Button label='Zobacz więcej' />
            </div>
            <div className='flex-1'>
              <Button label='Zobacz więcej' />
            </div>
          </div>
          <StatisticsContainer />
          <ContactsSection />
        </main>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
