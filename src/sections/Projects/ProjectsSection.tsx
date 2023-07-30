import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type Project = {
  title: string;
  year: string;
  details: string;
};

const mockProjects: Project[] = [
  {
    title: 'Residential Cooling System Installation',
    year: '2022',
    details:
      'Installed energy-efficient cooling systems for residential buildings, ensuring comfortable living environments during hot summers.',
  },
  {
    title: 'Commercial HVAC Retrofitting',
    year: '2023',
    details:
      'Upgraded the HVAC systems of multiple commercial buildings, resulting in reduced energy consumption and lower operating costs.',
  },
  {
    title: 'Industrial Ventilation Enhancement',
    year: '2021',
    details:
      'Implemented advanced ventilation solutions for industrial facilities, improving air quality and worker safety.',
  },
  {
    title: 'Smart Thermostat Integration',
    year: '2023',
    details:
      'Integrated smart thermostat technology into various properties, enabling remote temperature control and energy optimization.',
  },
  {
    title: 'Emergency HVAC Repair',
    year: '2022',
    details:
      'Provided emergency repair services for HVAC systems, minimizing downtime and restoring indoor comfort quickly.',
  },
];

type Statistics = {
  name: string;
  value: number;
};

const mockStatistics: Statistics[] = [
  {
    name: 'Years of Experience',
    value: 10,
  },
  {
    name: 'Projects Completed',
    value: 50,
  },
  {
    name: 'Clients Served',
    value: 100,
  },
  // Add more statistics as needed
];

export const ProjectsSection = () => {
  // Use the Intersection Observer hook
  const controls = useAnimation();
  const { ref, inView } = useInView({
    // triggerOnce: true, // Animate only once on enter
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUpAnimation = {
    hidden: { y: 30 },
    visible: { y: 0 },
  };

  // useEffect to trigger animations when inView changes
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section
      id='projects'
      className='flex h-screen w-screen flex-col px-6 pb-4 pt-24'
      ref={ref}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className='text-4xl font-bold'
      >
        Знакові Проєкти
      </motion.h1>
      {/* Projects container */}
      <motion.div
        className='mt-8 grid flex-1 grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 30,
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {mockProjects.map((project, index) => {
          const size = index === 0 ? 'big' : 'small';
          return (
            <div
              key={index}
              className={`relative rounded-lg bg-slate-100 p-4 ${
                size === 'big' ? 'lg:row-span-2' : ''
              } group`}
            >
              <div className='flex h-full flex-col items-start justify-end'>
                {/* Image */}
                <div className='flex h-full w-full flex-1 rounded-lg bg-slate-700'></div>
                <div className='mt-8'>
                  <h2 className='mb-2 text-xl font-semibold'>
                    {project.title}
                  </h2>
                  <p className='mb-2'>
                    <strong>Year:</strong> {project.year}
                  </p>
                </div>
                <p className='pointer-events-none absolute -bottom-4 left-0 flex items-start justify-center rounded-lg bg-slate-100 bg-opacity-40 px-4 py-12 text-slate-950 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100'>
                  {project.details}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        className='mt-8 px-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button className='border px-12 py-4 text-xl'>See all projects</button>
      </motion.div>
      {/* Statistics Container */}
      <motion.div
        className='mt-12 grid grid-cols-1 gap-4 px-6 md:grid-cols-3'
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 30,
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {mockStatistics.map((statistic, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center rounded-lg bg-slate-100 p-4'
          >
            <CountUp useEasing start={0} end={statistic.value} duration={2.5}>
              {({ countUpRef, start }) => (
                <motion.h1
                  ref={countUpRef}
                  className='text-gray-800'
                  onViewportEnter={() => {
                    start();
                  }}
                />
              )}
            </CountUp>
            <h3 className='mt-2 text-xl font-semibold'>{statistic.name}</h3>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
