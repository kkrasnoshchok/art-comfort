import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import { Cursor } from '@/components/cursor';
import { Layout } from '@/components/layout';

import { ContactsSection } from '@/sections/Contacts';
import { NewsSection } from '@/sections/News';
import { ProjectsSection } from '@/sections/Projects/ProjectsSection';
import { ServicesSection } from '@/sections/Services/ServicesSection';
import { TeamSection } from '@/sections/Team';
import { WelcomeSection } from '@/sections/Welcome';
import { Seo } from '@/seo';

const HomePage = () => {
  return (
    <Layout>
      <Seo />
      <Cursor />
      {/* React Toastify Initialistaion */}
      <ToastContainer autoClose={3000} position='bottom-right' />
      <motion.div className='flex w-full justify-center'>
        <motion.main className='flex w-11/12 flex-col items-center justify-center'>
          <WelcomeSection />
          <ServicesSection />
          <ProjectsSection />
          <TeamSection />
          {/* <CertificationsSection /> */}
          {/* <ContributionSection /> */}
          <NewsSection />
          <ContactsSection />
        </motion.main>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
