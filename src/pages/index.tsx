import { ContactsSection } from '@/contacts/sections';
import { Header } from '@/header';
import { AboutSection } from '@/sections/About';
import { CertificationsSection } from '@/sections/Certifications';
import { ContributionSection } from '@/sections/Contribution';
import { JobOffersSection } from '@/sections/JobOffers';
import { ProjectsSection } from '@/sections/Projects';
import { ServicesSection } from '@/sections/Services';
import { TeamSection } from '@/sections/Team/TeamSection';
import { Seo } from '@/seo';

const HomePage = () => (
  <>
    <Seo />
    <main>
      <Header />
      <AboutSection />
      <ServicesSection />
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
