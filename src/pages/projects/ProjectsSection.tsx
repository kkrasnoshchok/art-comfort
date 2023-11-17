import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import coolingSystem from '@/assets/Projects_1.jpg';
import hvacRetrofitting from '@/assets/Projects_2.jpg';
import industrialEnhancement from '@/assets/Projects_3.jpg';
import smartThermostat from '@/assets/Projects_4.jpg';
import emergencyRepair from '@/assets/Projects_5.jpg';
import { clsxm } from '@/utils';

type Project = {
  title: string;
  year: string;
  details: string;
  url: StaticImageData;
};

const mockProjects: Project[] = [
  {
    title: 'Residential Cooling System Installation',
    year: '2022',
    details:
      'Installed energy-efficient cooling systems for residential buildings, ensuring comfortable living environments during hot summers.',
    url: coolingSystem,
  },
  {
    title: 'Commercial HVAC Retrofitting',
    year: '2023',
    details:
      'Upgraded the HVAC systems of multiple commercial buildings, resulting in reduced energy consumption and lower operating costs.',
    url: hvacRetrofitting,
  },
  {
    title: 'Industrial Ventilation Enhancement',
    year: '2021',
    details:
      'Implemented advanced ventilation solutions for industrial facilities, improving air quality and worker safety.',
    url: industrialEnhancement,
  },
  {
    title: 'Smart Thermostat Integration',
    year: '2023',
    details:
      'Integrated smart thermostat technology into various properties, enabling remote temperature control and energy optimization.',
    url: smartThermostat,
  },
  {
    title: 'Emergency HVAC Repair',
    year: '2022',
    details:
      'Provided emergency repair services for HVAC systems, minimizing downtime and restoring indoor comfort quickly.',
    url: emergencyRepair,
  },
];

export const ProjectsSection = () => (
  <section id='projects' className='flex w-full flex-col px-6 pb-4 pt-24'>
    <motion.h1 className='font-bold'>Знакові Проєкти</motion.h1>
    {/* Projects container */}
    <motion.div className='relative mt-8 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {mockProjects.map((project, index) => {
        return (
          <div key={index} className='group border bg-slate-100 p-4'>
            <div className='flex h-full flex-col items-start'>
              <div
                className={clsxm([
                  'flex aspect-video w-full border border-slate-500 bg-slate-950',
                ])}
              >
                <Image
                  src={project.url}
                  className='aspect-video h-full w-full object-cover opacity-40 transition-all group-hover:opacity-100'
                  alt={project.title}
                />
              </div>
              <div className='flex flex-1 items-end'>
                <div className='mt-8'>
                  <h2 className='mb-2 text-xl font-semibold'>
                    {project.title}
                  </h2>
                  <p className='mb-2'>
                    <strong>Year:</strong> {project.year}
                  </p>
                </div>
              </div>
              {/* TODO: Rework the logics */}
              {/* <p className='pointer-events-none absolute -bottom-4 left-0 flex items-start justify-center rounded-sm bg-slate-100 bg-opacity-40 px-4 py-8 text-slate-950 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100'>
                  {project.details}
                </p> */}
            </div>
          </div>
        );
      })}
    </motion.div>
    <motion.div className='mt-4'>
      <button className='border px-8 py-2 text-lg'>See all projects</button>
    </motion.div>
  </section>
);
