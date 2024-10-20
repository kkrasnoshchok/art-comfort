import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

import { SectionWrapper } from '@/components/sectionWrapper';

import { cn } from '@/utils';
import { services } from '@/utils/dataset/services.dataset';

export const ServicesSection = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  return (
    <SectionWrapper
      sectionProps={{ id: 'services' }}
      className='h-fit pb-0 pt-48'
    >
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1 }}
        className={cn(
          'mx-4 w-full max-w-6xl overflow-hidden',
          'flex flex-row items-center gap-2'
        )}
      >
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className='group relative h-full w-full flex-1'
            >
              <div className='h-full w-full flex-1'>
                <Image
                  src={service.url}
                  className='h-60 w-full object-cover'
                  alt={`Service - ${service.title}`}
                />
              </div>
              {/* Content */}
              <div
                className={cn(
                  'absolute bottom-0 w-full bg-white bg-opacity-80 opacity-0',
                  'group-hover:opacity-100',
                  'transition-opacity'
                )}
              >
                <p>{service.title}</p>
                <p>Kliknij aby zobaczyć szczegóły</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};
