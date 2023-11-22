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
              innerSize={36}
              outerSize={36}
              color='rgba(249, 231, 238, 1)'
              innerStyle={{
                border: '2px solid rgba(196, 12, 82, 1)',
              }}
              outerStyle={{
                border: '2px solid rgba(196, 12, 82, 1)',
                backgroundColor: 'rgba(249, 231, 238, 1)',
              }}
              outerAlpha={0.9}
              innerScale={2}
              outerScale={2}
              trailingSpeed={1}
              clickables={[
                'a',
                'motion.a',
                {
                  target: '.project-card',
                  outerScale: 3,
                  outerStyle: { backgroundColor: 'rgba(196, 12, 82, 1)' },
                  children: (
                    <p className='text-primary-bg p'>Дізнатись більше</p>
                  ),
                },
                {
                  target: '.services-card',
                  outerScale: 2.5,
                  outerStyle: { backgroundColor: 'rgba(196, 12, 82, 1)' },
                  children: <p className='text-primary-bg p'>Обрати</p>,
                },
              ]}
            >
              {/* {customChildrenValue} */}
              {/* <div>Хочете дізнатись більше?</div> */}
            </AnimatedCursor>
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
