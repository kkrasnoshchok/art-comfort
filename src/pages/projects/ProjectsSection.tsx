import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import { StatisticsContainer } from '@/components/statistics';

import coolingSystem from '@/assets/Projects_1.jpg';
import hvacRetrofitting from '@/assets/Projects_2.jpg';
import industrialEnhancement from '@/assets/Projects_3.jpg';
import smartThermostat from '@/assets/Projects_4.jpg';
import emergencyRepair from '@/assets/Projects_5.jpg';
import { PartnersSection } from '@/sections/Partners';
import { Button } from '@/ui/Button';
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

export const ProjectsSection = () => {
  return (
    <motion.section
      id='projects'
      className='from-primary-bgStrong to-secondary-bgStrong flex w-screen flex-col items-center bg-gradient-to-b pb-4 pt-16'
    >
      <div className='border-primary-bg flex w-11/12 flex-col rounded-[36px] border-2 bg-gray-50 bg-opacity-25 p-8 shadow-xl backdrop-blur-2xl'>
        <motion.h1 className='h1 text-primary-default'>
          Знакові Проєкти
        </motion.h1>
        {/* Projects container */}
        <motion.div className='relative mt-8 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {mockProjects.map((project, index) => {
            return (
              <div
                key={index}
                className={clsxm(
                  'project-card relative flex h-full flex-col items-start overflow-hidden rounded-2xl bg-slate-100',
                  'group transition-transform hover:scale-[1.01] active:scale-[0.98]'
                )}
              >
                {/* Project Image */}
                <div
                  className={clsxm([
                    'bg-primary-defaultStrong flex aspect-square w-full border-slate-500',
                  ])}
                >
                  <Image
                    src={project.url}
                    className={clsxm(
                      'aspect-square h-full w-full object-cover',
                      'opacity-20 transition-opacity group-hover:opacity-10'
                    )}
                    alt={project.title}
                  />
                </div>
                {/* Project Title */}
                <div className='absolute top-1/2 w-full -translate-y-1/2 px-8'>
                  <h4 className='h3 text-primary-bg mb-2 text-center font-normal'>
                    {project.title}
                  </h4>
                </div>
                {/* Project Description
                <div
                  className={clsxm(
                    'bg-primary-bg absolute -bottom-4 w-11/12 cursor-pointer self-center rounded-2xl px-4 py-4 opacity-0',
                    'flex flex-row items-center justify-between',
                    'transition-all hover:scale-[0.98] active:scale-95 group-hover:bottom-4 group-hover:opacity-100'
                  )}
                >
                  <p className='h4 text-primary-defaultStrong font-semibold'>
                    Дізнатись більше
                  </p>
                  <Button
                    Icon={
                      <FaArrowRight color='rgba(52, 76, 114, 1)' size={16} />
                    }
                    size='small'
                    theme='subtle'
                    className={clsxm('rounded-full px-2 py-2')}
                    onClick={() => {
                      // setActiveService(service);
                    }}
                  />
                </div> */}
              </div>
            );
          })}
        </motion.div>
        <motion.div className='mt-4'>
          <Button
            label='Подивитись на всі проєкти'
            onClick={() => {
              // open all projects
            }}
          />
        </motion.div>
      </div>
      <StatisticsContainer />
      <div className='mt-8'>
        <PartnersSection />
      </div>
    </motion.section>
  );
};
