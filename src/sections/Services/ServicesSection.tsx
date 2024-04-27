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
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className={clsxm('grid w-full max-w-7xl grid-cols-2 overflow-hidden')}
      >
        {/* Left */}
        <motion.div className='pr-8'>
          <motion.h1 className='h2'>Послуги</motion.h1>
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
                      // 'border-primary-default border',
                      ' rounded-2xl p-4 transition duration-500',
                      // 'hover:shadow-primary-default hover:shadow-sm',
                      'active:scale-[0.99]',
                      isActive && 'services-card--active bg-slate-50'
                      // isActive && 'border-primary-bg'
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
                        'p text-gray-600 transition-colors'
                        // isActive && 'text-primary-bg'
                      )}
                    >
                      {service.title}
                    </p>
                    <Button
                      Icon={
                        <FaArrowRight
                          color={
                            isActive
                              ? 'rgba(38, 35, 56, 1)'
                              : 'rgba(235, 237, 241, 1)'
                          }
                          size={16}
                        />
                      }
                      size='small'
                      className={clsxm(
                        'rounded-full px-2 py-2',
                        'bg-gray-400',
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
          <Button
            label='Детальніше про послуги'
            className='mt-8'
            href='services'
          />
        </motion.div>
        {/* Right */}
        <motion.div className='bg-grayscale-header relative z-10 flex flex-1 flex-col justify-between rounded-[36px] p-8'>
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
            <div className='flex flex-1 flex-row items-end justify-end gap-4'>
              <Button
                href={`services/${activeService.id}`}
                theme='primary'
                className='inline-flex'
                label='Звʼязатись з нами'
              />
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
