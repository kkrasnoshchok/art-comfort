import { motion } from 'framer-motion';

import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@/components/layout';

import { ContactsSection } from '@/sections/Contacts';
import { NewsSection } from '@/sections/News';
import { ProjectsSection } from '@/sections/Projects/ProjectsSection';
import { ServicesSection } from '@/sections/Services/ServicesSection';
import { WelcomeSection } from '@/sections/Welcome';
import { Seo } from '@/seo';

const HomePage = () => {
  return (
    <Layout>
      <Seo />
      <motion.div className='flex h-full w-full justify-center'>
        <main className='flex h-full w-full flex-col items-center justify-center'>
          <WelcomeSection />
          <ServicesSection />
          <ProjectsSection />
          {/* <TeamSection /> */}
          <NewsSection />
          <ContactsSection />
        </main>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
