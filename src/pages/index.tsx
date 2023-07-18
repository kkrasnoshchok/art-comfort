import { Header } from '@/components';

import {
  AboutSection,
  CertificationsSection,
  ContactsSection,
  ContributionSection,
  JobOffersSection,
  PartnersSection,
  ProjectsSection,
  ServicesSection,
  TeamSection,
} from '@/sections';
import { Seo } from '@/seo';

const HomePage = () => (
  <>
    <Seo />
    <main>
      <Header />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <ProjectsSection />
      <TeamSection />
      <JobOffersSection />
      <CertificationsSection />
      <ContributionSection />
      <ContactsSection />
    </main>
  </>
);

export default HomePage;
