import { motion, useAnimationControls, Variants } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';
import { Service, services } from '@/utils/dataset/services.dataset';

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const controls = useAnimationControls();

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  const contentVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
      },
    }),
    []
  );

  return (
    <SectionWrapper sectionProps={{ id: 'services' }} className='pb-0'>
      <motion.div
        // variants={sectionVariants}
        // initial='hidden'
        // whileInView='visible'
        // viewport={{ amount: 0.1, once: true }}
        className={clsxm('grid w-11/12 grid-cols-2 overflow-hidden')}
      >
        {/* Left */}
        <motion.div className='pr-8 pt-8'>
          <motion.h1 className='h1 text-primary-default'>Послуги</motion.h1>
          <motion.div className='mt-4 flex flex-col'>
            {services.slice(0, 5).map((service, index) => {
              const isActive = activeService.title === service.title;
              return (
                <motion.div
                  // variants={itemVariants}
                  // initial='hidden'
                  // whileInView='visible'
                  // viewport={{ amount: 0.5, once: true }}
                  transition={{ delay: 100 * index }}
                  key={service.title}
                  className='services-card pt-4'
                >
                  <div
                    className={clsxm(
                      'flex cursor-pointer flex-row items-center justify-between',
                      'border-primary-default rounded-2xl border p-4 transition duration-500',
                      'hover:shadow-primary-default hover:shadow-sm',
                      'active:scale-[0.99]',
                      isActive &&
                        'bg-primary-default border-primary-bg services-card--active'
                    )}
                    onClick={() => {
                      controls.start('hidden');
                      setTimeout(() => {
                        setActiveService(service);
                        controls.start('visible');
                      }, 200);
                    }}
                  >
                    <p
                      className={clsxm(
                        'p text-primary-defaultStrong transition-colors',
                        isActive && 'text-primary-bg'
                      )}
                    >
                      {service.title}
                    </p>
                    <Button
                      Icon={
                        <FaArrowRight
                          color={
                            isActive
                              ? 'rgba(36, 84, 116, 1)' // primary-default
                              : 'rgba(235, 237, 241, 1)' // primary-bg
                          }
                          size={16}
                        />
                      }
                      size='small'
                      className={clsxm(
                        'rounded-full px-2 py-2',
                        isActive && 'bg-primary-bg hover:bg-primary-bg'
                      )}
                      onClick={() => {
                        setActiveService(service);
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <Button label='Show all services' className='mt-8' href='services' />
        </motion.div>
        {/* Right */}
        <motion.div className='bg-primary-defaultStrong relative z-10 flex flex-1 flex-col justify-between rounded-[36px] p-8'>
          <motion.div
            className='flex h-full flex-col'
            variants={contentVariants}
            initial='visible'
            animate={controls}
          >
            <motion.h2 className='h2 text-primary-bg'>
              {activeService.title}
            </motion.h2>
            <p className='text-primary-bg mt-4'>{activeService.description}</p>
            <div className='flex flex-1 flex-col items-end justify-end'>
              <Button
                href={`services/${activeService.id}`}
                theme='subtle'
                className='inline-flex'
                label='Дізнатись детальніше'
              />
            </div>
            <motion.div className='absolute left-0 top-0 -z-10 h-full w-full'>
              <Image
                src={activeService.url}
                className='h-full w-full rounded-[36px] object-cover opacity-10'
                alt={activeService.description}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
