import { motion, Variants } from 'framer-motion';

// @ts-expect-error react-slick types are present, but written really poorly.
import { SectionWrapper } from '@/components/sectionWrapper';

import { useBreakpoint, useTranslations } from '@/utils';

export const TeamSection = () => {
  const { is2xl } = useBreakpoint('2xl');
  const { isMd } = useBreakpoint('md');
  const { team: teamTranslations } = useTranslations();

  // const getSlidesPerView = () => {
  //   if (is2xl) {
  //     return 6;
  //   }
  //   if (isMd) {
  //     return 5;
  //   }
  //   return 4;
  // };

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  return (
    <SectionWrapper sectionProps={{ id: 'team' }} className='pb-0'>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.6 }}
        className='mx-4 flex w-full max-w-6xl flex-col py-8'
      >
        <h1 className='h2 text-grayscale-headerWeak'>
          {teamTranslations.title}
        </h1>
        <div className='mt-8 flex'>
          {/* <Slider
            {...{
              slidesToShow: 4,
              slidesToScroll: 2,
              // arrows: true,
              // infinite: true,
              // pauseOnHover: true,
              // autoplay: true,
            }}
          >
            {team.map((user, index) => (
              <motion.div
                key={`user-${user.email} -> ${index}`}
                className={cn('team-element group relative pr-4')}
              >
                <div
                  className={cn([
                    'bg-grayscale-headerWeak aspect-square rounded-xl',
                  ])}
                ></div>
                <div className={cn('p-2')}>
                  <h4 className='text-primary-defaultStrong h4'>{user.name}</h4>
                  <p className='p'>{user.role}</p>
                </div>
              </motion.div>
            ))}
          </Slider> */}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

{
  /* <div className='mt-8 flex h-full w-full flex-col gap-12 lg:flex-row'>
          <Swiper
            grabCursor
            autoplay
            slidesPerView={getSlidesPerView()}
            spaceBetween={24}
            modules={[Pagination, Navigation, Autoplay, A11y]}
            className='mx-4 h-full w-full'
          >
            {team.map((user, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className={clsxm(
                    'team-element group relative',
                    'flex h-full w-full flex-col items-center justify-center'
                  )}
                >
                  <div
                    className={clsxm([
                      'bg-grayscale-headerWeak aspect-square w-full rounded-2xl',
                    ])}
                  >
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
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */
}
