import { Header } from '@/components';

import {
  AboutSection,
  ContactsSection,
  ContributionSection,
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
      <ProjectsSection />
      <PartnersSection />
      <TeamSection />
      {/* <JobOffersSection /> */}
      {/* <CertificationsSection /> */}
      <ContributionSection />
      <ContactsSection />
    </main>
  </>
);

export default HomePage;
