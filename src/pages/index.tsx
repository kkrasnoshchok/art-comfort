import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@/components/layout';

import { ContactsSection } from '@/pages/contacts';
import { NewsSection } from '@/pages/news/section';
import { ProjectsSection } from '@/pages/projects/ProjectsSection';
import { ServicesSection } from '@/pages/services/ServicesSection';
import { TeamSection } from '@/sections/Team';
import { WelcomeSection } from '@/sections/Welcome';
import { Seo } from '@/seo';

const HomePage = () => (
  <Layout>
    <Seo />
    <div className='flex w-full justify-center'>
      <main className='flex w-11/12 flex-col items-center justify-center'>
        <ToastContainer autoClose={3000} position='bottom-right' />
        <WelcomeSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        {/* <CertificationsSection /> */}
        {/* <ContributionSection /> */}
        <NewsSection />
        <ContactsSection />
      </main>
    </div>
  </Layout>
);

export default HomePage;
