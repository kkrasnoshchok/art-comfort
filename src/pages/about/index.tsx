import { motion } from 'framer-motion';
import Link from 'next/link';

import { Layout } from '@/components/layout';

import { team } from '@/utils/dataset/team.dataset';
import { vacancies } from '@/utils/dataset/vacancies.dataset';
import { slugify } from '@/utils/slugify';

const MotionLink = motion(Link);

const AboutPage = () => {
  return (
    <Layout>
      <div className='bg-primary-defaultStrong h-full min-h-screen w-full px-[15%] py-16'>
        <div className='rounded-3xl bg-white bg-opacity-75 shadow backdrop-blur-2xl'>
          <div className='px-[20%] py-16'>
            <h1 className='mt-8'>
              We help businesses thrive online with friendly, easy to manage
              websites & apps.
            </h1>
            <p className='mt-8'>
              We’re a UK-based web design & development studio motivated by
              doing good work for good people. No sales pitch, no fluff, we just
              deliver good honest work to small businesses and large
              organisations alike. Our years of experience mean we can get to
              the heart of a problem quicker, with less back and forth, and less
              stress for everyone.
            </p>
            {/* History */}
            <div className='mt-8'>
              <h3>History</h3>
              <p className='mt-4'>
                We’re a UK-based web design & development studio motivated by
                doing good work for good people. No sales pitch, no fluff, we
                just deliver good honest work to small businesses and large
                organisations alike. Our years of experience mean we can get to
                the heart of a problem quicker, with less back and forth, and
                less stress for everyone.
              </p>
            </div>
            {/* Licenses & Certificates Link */}
            <div className='mt-8'>
              <h3>Ліцензії та сертифікати</h3>
              <div className='mt-4 flex flex-row justify-between gap-2'>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className='flex h-48 flex-1 items-center justify-center rounded-2xl bg-slate-100'
                    >
                      index
                    </div>
                  ))}
              </div>
            </div>
            {/* Vacancies Link */}
            <div className='mt-8'>
              <h3>Наші відкриті позиції</h3>
              <div className='mt-4 flex flex-col gap-2'>
                {vacancies.map((vacancy) => (
                  <MotionLink
                    href={`/vacancies/${slugify(
                      `${vacancy.id} ${vacancy.jobTitle} ${vacancy.location}`
                    )}`}
                    className='cursor-pointer rounded-3xl bg-slate-50 px-3 py-2'
                    key={vacancy.id}
                    whileHover={{
                      scale: 1.009,
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                  >
                    {vacancy.jobTitle}
                  </MotionLink>
                ))}
              </div>
            </div>
            {/* Team Section Link */}
            <div className='mt-8'>
              <h3>Наша команда</h3>
              <div className='mt-4 flex flex-row flex-wrap justify-between gap-y-3'>
                {team.map((member) => (
                  <div
                    key={member.id}
                    className='flex h-56 w-[32%] items-center justify-center rounded-3xl bg-slate-100'
                  >
                    {member.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
