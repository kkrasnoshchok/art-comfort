import { Header } from '@/components';
import { StatisticsContainer } from '@/components/header/components/Statistics/StatisticsContainer';

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
      <StatisticsContainer />
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
