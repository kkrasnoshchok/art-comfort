import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const PartnersSection = () => {
  return (
    <section id='#partners' className='my-24 flex w-screen flex-col px-6'>
      <h1>Партнери</h1>
      <Swiper
        grabCursor
        modules={[Autoplay]}
        centeredSlides
        loop
        slidesPerView={5}
        autoplay={{
          delay: 2000,
        }}
        className='mt-20 flex h-full w-full'
      >
        {Array(15)
          .fill(0)
          .map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className='h-24 w-48 border border-slate-300 bg-slate-50' />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
