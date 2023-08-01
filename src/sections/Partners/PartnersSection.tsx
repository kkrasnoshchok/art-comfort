import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { clsxm, useBreakpoint } from '@/utils';

export const PartnersSection = () => {
  const { isLg } = useBreakpoint('lg');
  return (
    <article
      id='#partners'
      className={clsxm([
        'mt-8 flex w-screen flex-col items-center justify-center',
        isLg && 'px-12',
      ])}
    >
      <Swiper
        grabCursor
        modules={[Autoplay, EffectFade]}
        loop
        slidesPerView={isLg ? 6 : 1}
        centeredSlides
        spaceBetween={24}
        autoplay={{ delay: 2000 }}
        className={clsxm([
          'flex h-full w-full items-center justify-center',
          isLg && 'mt-12',
        ])}
      >
        {Array(15)
          .fill(0)
          .map((_, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={clsxm([
                  'aspect-video w-full border bg-slate-100',
                  isLg && 'h-24 w-48',
                ])}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </article>
  );
};
