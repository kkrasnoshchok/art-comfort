import { motion, useAnimationControls, Variants } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/button';
import { cn } from '@/utils';
import { Service, services } from '@/utils/dataset/services.dataset';
import { useTranslations } from '@/utils/locales';

export const ServicesSection = () => {
  const { services: servicesTranslations } = useTranslations();
  const [activeService, setActiveService] = useState<Service | null>(null);
  const memoizedServices = useMemo(() => {
    const newServices = services(servicesTranslations);
    setActiveService((prev) => {
      if (prev) {
        const newActiveService = newServices.find(
          (service) => service.id === prev?.id
        );
        return newActiveService || newServices[0];
      }

      return newServices[0];
    });
    return newServices;
  }, [servicesTranslations]);
  const controls = useAnimationControls();

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
    <SectionWrapper sectionProps={{ id: 'services' }} className='h-fit pb-0'>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1 }}
        className={cn(
          'mx-4 grid w-full max-w-6xl grid-rows-2 overflow-hidden md:grid-cols-2 md:grid-rows-none'
        )}
      >
        {/* Left */}
        <motion.div className='md:pr-8'>
          <motion.h1 className='h2'>{servicesTranslations.title}</motion.h1>
          <motion.div className='mt-4 flex flex-col'>
            {memoizedServices.map((service, index) => {
              const isActive = activeService?.title === service.title;
              return (
                <motion.div
                  transition={{ delay: 100 * index }}
                  key={service.title}
                  className='services-card pt-4'
                >
                  <div
                    className={cn(
                      'flex cursor-pointer flex-row items-center justify-between',
                      'rounded-2xl p-2 transition duration-500 md:p-4',
                      'active:scale-[0.99]',
                      isActive && 'services-card--active bg-slate-50'
                    )}
                    onClick={() => {
                      controls.start('hidden');
                      setTimeout(() => {
                        setActiveService(service);
                        controls.start('visible');
                      }, 200);
                    }}
                  >
                    <p className={cn('p text-gray-600 transition-colors')}>
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
                          className={cn('rotate-90 md:rotate-0')}
                        />
                      }
                      size='small'
                      className={cn(
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
        <motion.div className='bg-grayscale-header relative z-10 mt-8 flex flex-1 flex-col justify-between rounded-[36px] p-8 md:mt-0'>
          <motion.div
            className='flex h-full flex-col'
            variants={contentVariants}
            initial='visible'
            animate={controls}
          >
            <motion.h2 className='h2 text-primary-bg'>
              {activeService?.title}
            </motion.h2>
            <p className='text-primary-bg mt-4 text-xs sm:text-sm'>
              {activeService?.description}
            </p>
            <div className='flex flex-1 flex-row items-end justify-end gap-4'>
              <Button
                href='#contacts'
                theme='primary'
                className='inline-flex'
                label='Звʼязатись з нами'
                size='small'
              />
              <Button
                href={`services/${activeService?.id}`}
                theme='subtle'
                className='inline-flex'
                label='Дізнатись детальніше'
                size='small'
              />
            </div>
            {activeService && (
              <motion.div className='absolute left-0 top-0 -z-10 h-full w-full'>
                <Image
                  src={activeService?.url}
                  className='h-full w-full rounded-[36px] object-cover opacity-10'
                  alt={activeService?.description}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
