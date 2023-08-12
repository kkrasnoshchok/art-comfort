import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FacebookIcon } from '@/assets/svgs/Facebook';
import { RedditIcon } from '@/assets/svgs/RedditIcon';
import { clsxm, useBreakpoint } from '@/utils';

const mockPartners = [
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
  {
    Icon: FacebookIcon,
    alt: 'Facebook Icon',
  },
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
  {
    Icon: FacebookIcon,
    alt: 'Facebook Icon',
  },
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
  {
    Icon: FacebookIcon,
    alt: 'Facebook Icon',
  },
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
  {
    Icon: FacebookIcon,
    alt: 'Facebook Icon',
  },
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
  {
    Icon: FacebookIcon,
    alt: 'Facebook Icon',
  },
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
  {
    Icon: FacebookIcon,
    alt: 'Facebook Icon',
  },
  {
    Icon: RedditIcon,
    alt: 'Reddit Icon',
  },
];

export const PartnersSection = () => {
  const { isXl } = useBreakpoint('xl');
  const { isLg } = useBreakpoint('lg');
  const { isMd } = useBreakpoint('md');

  const getSlidesPerView = () => {
    if (isXl) {
      return 6;
    }
    if (isLg) {
      return 5;
    }
    if (isMd) {
      return 3;
    }

    return 1;
  };

  return (
    <article
      id='#partners'
      className={clsxm([
        'mt-8 flex w-screen flex-col items-center justify-center lg:px-12',
      ])}
    >
      <h3>
        Тут буде така каруселька з логотипами партнерів, які по дефолту
        чорно-білі, а по наведенню стають кольоровими
      </h3>
      <Swiper
        grabCursor
        modules={[Autoplay, EffectFade]}
        loop
        slidesPerView={getSlidesPerView()}
        centeredSlides
        spaceBetween={24}
        autoplay={{ delay: 2000 }}
        className={clsxm([
          'flex h-full w-full items-center justify-center lg:mt-12',
        ])}
      >
        {/* {Array(15)
          .fill(0)
          .map((_, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={clsxm([
                  'aspect-video w-full border bg-slate-100 lg:h-24 lg:w-48 lg:portrait:w-36',
                ])}
              />
            </SwiperSlide>
          ))} */}
        {mockPartners.map((Element, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={clsxm([
                'flex aspect-video w-full items-center justify-center lg:h-24 lg:w-48 lg:portrait:w-36',
              ])}
            >
              <Element.Icon />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};
