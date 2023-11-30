import { ReactNode, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@/components/layout';

import { ContactsSection } from '@/sections/Contacts';
import { NewsSection } from '@/sections/News';
import { ProjectsSection } from '@/sections/Projects/ProjectsSection';
import { ServicesSection } from '@/sections/Services/ServicesSection';
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
                border: '2px solid rgba(20, 20, 43, 1)',
                backgroundColor: 'rgba(235, 237, 241, 0.1)',
              }}
              outerAlpha={0.9}
              innerScale={2}
              trailingSpeed={1}
              clickables={[
                {
                  target: '.header-logo',
                  innerScale: 4.5,
                  innerStyle: {
                    border: '4px solid rgba(196, 12, 82, 1)',
                    backgroundColor: 'rgba(52, 76, 114, 0.8)',
                    borderRadius: 48,
                  },
                  children: (
                    <p className='text-primary-bg text-center font-semibold'>
                      Повернутись на головну сторінку
                    </p>
                  ),
                },
                {
                  target: '.header-link',
                  innerScale: 1.5,
                  innerStyle: {
                    border: '2px solid rgba(196, 12, 82, 1)',
                    backgroundColor: 'rgba(52, 76, 114, 0.2)',
                  },
                },
                {
                  target: '.header-language-select',
                  innerScale: 1.2,
                  innerStyle: {
                    border: '2px solid rgba(196, 12, 82, 1)',
                    backgroundColor: 'rgba(52, 76, 114, 0.4)',
                  },
                },
                {
                  target: '.header-burger-menu',
                  innerScale: 1.5,
                  innerStyle: {
                    border: '2px solid rgba(196, 12, 82, 1)',
                    backgroundColor: 'rgba(52, 76, 114, 0.4)',
                  },
                },
                {
                  target: '.swiper-element',
                  innerScale: 4.5,
                  innerStyle: {
                    border: '4px solid rgba(196, 12, 82, 1)',
                    backgroundColor: 'rgba(52, 76, 114, 0.8)',
                  },
                  children: (
                    <p className='text-primary-bg text-center font-semibold'>
                      Дізнатись більше про партнерів
                    </p>
                  ),
                },
                {
                  target: 'a',
                  innerScale: 3.5,
                  innerStyle: {
                    backgroundColor: 'rgba(196, 12, 82, 1)',
                    border: '4px solid rgba(196, 12, 82, 1)',
                  },
                  children: (
                    <p className='text-primary-bg font-semibold'>Натиснути</p>
                  ),
                },
                {
                  target: '.services-card',
                  innerScale: 2.5,
                  innerStyle: {
                    backgroundColor: 'rgba(196, 12, 82, 1)',
                    border: '4px solid rgba(196, 12, 82, 1)',
                  },
                  children: (
                    <p className='text-primary-bg p text-center'>Обрати</p>
                  ),
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
                {
                  target: '.team-element',
                  innerScale: 3.5,
                  innerStyle: {
                    backgroundColor: 'rgba(196, 12, 82, 1)',
                    border: '4px solid rgba(196, 12, 82, 1)',
                  },
                  children: (
                    <p className='text-primary-bg p text-center'>Звʼязатись</p>
                  ),
                },
                {
                  target: '.base-input',
                  innerScale: 2,
                  innerStyle: {
                    backgroundColor: 'rgba(196, 12, 82, 1)',
                    border: '4px solid rgba(196, 12, 82, 1)',
                  },
                },
                {
                  target: '.input-file',
                  innerScale: 4,
                  innerStyle: {
                    backgroundColor: 'rgba(196, 12, 82, 1)',
                    border: '4px solid rgba(196, 12, 82, 1)',
                  },
                  children: (
                    <p className='text-primary-bg p text-center'>
                      Натисність щоб додати файл
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
