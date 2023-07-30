import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const PartnersSection = () => {
  return (
    <article id='#partners' className='flex w-screen flex-col px-12'>
      <Swiper
        grabCursor
        modules={[Autoplay, EffectFade]}
        loop
        centeredSlides
        slidesPerView={4}
        autoplay={{ delay: 2000 }}
        className='ml-6 mt-12 flex h-full w-full'
      >
        {Array(15)
          .fill(0)
          .map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className='h-24 w-48 rounded-lg border bg-slate-100' />
            </SwiperSlide>
          ))}
      </Swiper>
    </article>
  );
};
