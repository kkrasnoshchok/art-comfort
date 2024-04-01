import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { clsxm, useBreakpoint } from '@/utils';
import { cn } from '@/utils/cn';
import { team } from '@/utils/dataset/team.dataset';

export const TeamSection = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const { is2xl } = useBreakpoint('2xl');
  const { isMd } = useBreakpoint('md');

  const getSlidesPerView = () => {
    if (is2xl) {
      return 6;
    }
    if (isMd) {
      return 5;
    }
    return 4;
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  return (
    <SectionWrapper sectionProps={{ id: 'team' }} className='pb-0'>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true }}
        className={clsxm('flex w-full max-w-7xl flex-col py-8')}
      >
        <h1 className='h2 text-grayscale-headerWeak'>Наша команда</h1>
        <div className='mt-8 flex h-full w-full flex-col gap-12 lg:flex-row'>
          <Swiper
            ref={swiperRef}
            grabCursor
            loop
            autoplay
            slidesPerView={getSlidesPerView()}
            spaceBetween={24}
            modules={[Pagination, Navigation, Autoplay, A11y]}
            className='h-full w-full'
          >
            {team.map((user, index) => (
              <SwiperSlide key={index}>
                <div
                  className={clsxm(
                    'team-element group relative',
                    'flex h-full w-full flex-col items-center justify-center'
                    // 'transition-all hover:scale-[0.98] active:scale-[0.95]'
                  )}
                >
                  <div
                    className={clsxm([
                      'bg-grayscale-headerWeak aspect-square w-full rounded-2xl',
                    ])}
                  >
                    <Image
                      src={user.url}
                      alt='alt'
                      className={cn(
                        'aspect-square h-full w-full rounded-xl opacity-60'
                        // 'transition-opacity group-hover:opacity-10'
                      )}
                    />
                  </div>
                  <div
                    className={clsxm(
                      'absolute bottom-4 w-11/12',
                      'pointer-events-none opacity-0 transition-opacity',
                      // 'group-hover:pointer-events-auto group-hover:opacity-100',
                      'bg-primary-bg rounded-lg p-2'
                    )}
                  >
                    <h4 className='text-primary-defaultStrong h4'>
                      {user.name}
                    </h4>
                    <p className='p'>{user.role}</p>
                    <div className='flex flex-row items-center'>
                      <Button
                        theme='ghost'
                        href={`mailto:${user.email}`}
                        className='text-primary-defaultStrong h4'
                        label={user.email}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
