import { Layout } from '@/components/layout';
import { StatisticsContainer } from '@/components/statistics';

import { ContactsSection } from '@/pages/contacts';
import FileUpload from '@/pages/contacts/FileUpload';
import { ProjectsSection } from '@/pages/projects/ProjectsSection';
import { ServicesSection } from '@/pages/services/ServicesSection';
import { AboutSection } from '@/sections/About';
import { ContributionSection } from '@/sections/Contribution';
import { PartnersSection } from '@/sections/Partners';
import { TeamSection } from '@/sections/Reviews/ReviewsSection';
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
      <ContributionSection />
      <ContactsSection />
      <FileUpload />
    </main>
  </Layout>
);

export default HomePage;
