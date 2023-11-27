import { ReactNode, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
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
import { CustomChildrenContext } from '@/utils/context';

const HomePage = () => {
  const [customChildrenValue, setCustomChildrenValue] = useState<ReactNode>('');
  return (
    <CustomChildrenContext.Provider
      value={{
        value: customChildrenValue,
        setValue: setCustomChildrenValue,
      }}
    >
      <Layout>
        <Seo />
        <div className='flex w-full justify-center'>
          <main className='flex w-11/12 flex-col items-center justify-center'>
            {/* React Animated Cursor Initialisation */}
            <AnimatedCursor
              innerSize={32}
              outerSize={0}
              innerStyle={{
                border: '4px solid rgba(20, 20, 43, 1)',
                backgroundColor: 'rgba(235, 237, 241, 1)',
              }}
              outerAlpha={0.9}
              innerScale={2}
              trailingSpeed={1}
              clickables={[
                'a',
                {
                  target: 'a',
                  innerScale: 2.5,
                  innerStyle: {
                    border: '4px solid rgba(196, 12, 82, 1)',
                    backgroundColor: 'rgba(52, 76, 114, 0.4)',
                  },
                },
                {
                  target: '.services-card',
                  innerScale: 2.5,
                  innerStyle: {
                    border: '4px solid rgba(196, 12, 82, 1)',
                    backgroundColor: 'rgba(52, 76, 114, 0.4)',
                  },
                },
                {
                  target: '.project-card',
                  innerScale: 3.5,
                  innerStyle: {
                    backgroundColor: 'rgba(196, 12, 82, 1)',
                    border: '4px solid rgba(196, 12, 82, 1)',
                  },
                  children: (
                    <p className='text-primary-bg p text-center'>
                      Дізнатись більше
                    </p>
                  ),
                },
              ]}
            />
            {/* React Toastify Initialistaion */}
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
    </CustomChildrenContext.Provider>
  );
};

export default HomePage;
