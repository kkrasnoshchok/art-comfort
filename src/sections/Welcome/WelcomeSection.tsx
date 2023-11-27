import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import NextImage from '@/components/NextImage';
import { SectionWrapper } from '@/components/sectionWrapper';

import logo from '@/assets/logo.png';
import { PartnersSection } from '@/sections/Partners';
import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';

export const WelcomeSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current?.play();
    }
  }, [videoRef]);
  return (
    <SectionWrapper
      sectionProps={{ id: 'about' }}
      className='relative mt-0 flex aspect-video w-screen flex-col items-center pb-0 pt-0'
      innerClassName='bg-gradient-to-b'
    >
      <motion.header
        initial={{ translateY: -20 }}
        animate={{ translateY: 0 }}
        exit={{ opacity: 0 }}
        className='fixed top-4 z-50 flex w-screen items-center justify-center'
      >
        <div
          className={clsxm([
            'flex cursor-pointer transition-transform hover:scale-105',
          ])}
        >
          <Link href='#'>
            <div className='mb-3 flex items-center'>
              <NextImage src={logo} alt='logo' width={120} height={120} />
            </div>
          </Link>
        </div>
      </motion.header>
      <div className='mt-16 flex w-11/12 flex-1 flex-col items-center justify-center'>
        {/* Animated Text */}
        {/* <div className='relative flex h-10 flex-row items-center justify-center'>
          {offerOptions.map((offer, index) => (
            <motion.div
              key={offer}
              animate={{
                opacity: index !== activeIndex ? 0 : 1,
                translateY: index !== activeIndex ? 20 : 0,
              }}
              className={clsxm('absolute', index !== activeIndex && 'hidden')}
            >
              <motion.h1 className='text-primary-default w-screen text-center'>
                {offer}
              </motion.h1>
            </motion.div>
          ))}
        </div> */}
        <div
          onMouseEnter={() => {
            if (videoRef.current) {
              videoRef.current?.pause();
            }
          }}
          onMouseLeave={() => {
            if (videoRef.current) {
              videoRef.current?.play();
            }
          }}
          className={clsxm(
            'flex flex-col items-center justify-center',
            'border-primary-bg rounded-2xl border-2 bg-gray-50 bg-opacity-25 p-8 shadow-sm backdrop-blur-sm',
            'transition-transform hover:scale-105 hover:shadow-xl hover:backdrop-blur-lg'
          )}
        >
          <h1 className='h1 text-primary-defaultStrong'>
            Досліджуйте мистецтво комфорту разом з нами
          </h1>
          <Button
            className='mt-12'
            href='#services'
            label='Розпочати дослідження'
            theme='secondary'
          />
        </div>
      </div>
      <div className='mb-12'>
        <PartnersSection />
      </div>
      <div className='from-primary-bgStrong to-secondary-bgStrong absolute left-0 top-0 -z-[5] h-full w-full bg-gradient-to-b'>
        <video
          ref={videoRef}
          autoPlay
          loop
          controls={false}
          className='h-full w-full opacity-40'
        >
          <source src='/video.mp4' type='video/mp4' />
          Your browser doesnt support the video tag
        </video>
      </div>
    </SectionWrapper>
  );
};
