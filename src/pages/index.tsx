import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { ContactsSection } from '@/contacts/sections';
import { AboutSection } from '@/sections/About';
import { CertificationsSection } from '@/sections/Certifications';
import { JobOffersSection } from '@/sections/JobOffers';
import { ProjectsSection } from '@/sections/Projects';
import { ServicesSection } from '@/sections/Services';
import { TeamSection } from '@/sections/Team/TeamSection';

const HomePage = () => (
  <Layout>
    <Seo />
    <main>
      <Header />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <JobOffersSection />
      <CertificationsSection />
      <ContactsSection />
    </main>
  </Layout>
);

export default HomePage;
