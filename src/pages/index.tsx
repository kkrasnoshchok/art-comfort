import { Layout } from '@/components/layout';
import { StatisticsContainer } from '@/components/statistics';

import { ContactsSection } from '@/pages/contacts';
import { NewsSection } from '@/pages/news/section';
import { ProjectsSection } from '@/pages/projects/ProjectsSection';
import { ServicesSection } from '@/pages/services/ServicesSection';
import { AboutSection } from '@/sections/About';
import { PartnersSection } from '@/sections/Partners';
import { TeamSection } from '@/sections/Team';
import { Seo } from '@/seo';

const HomePage = () => (
  <Layout>
    <Seo />
    <main>
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <ProjectsSection />
      <StatisticsContainer />
      <PartnersSection />
      <TeamSection />
      {/* <CertificationsSection /> */}
      {/* <ContributionSection /> */}
      <NewsSection />
      <ContactsSection />
    </main>
  </Layout>
);

export default HomePage;
