import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import NextImage from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { PartnersSection } from '@/sections/Partners';
import { clsxm } from '@/utils';

const offerOptions = [
  'Проектування систем кондиціонування та вентиляції',
  'Підбір і доставка кондиціонерів',
  'Продаж кліматичного обладнання',
  'Демонтажні роботи',
  'Сервісне обслуговування систем кондиціонування',
  'Монтажні та пуско-налагоджувальні роботи',
  'Гарантійний і післягарантійний ремонт',
];

export const WelcomeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => {
        if (offerOptions.length - 1 === prev) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section
      id='about'
      className='from-primary-bgStrong to-secondary-bgStrong flex w-screen flex-col items-center bg-gradient-to-b pt-24'
      ref={sectionRef}
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
        <div className='relative flex h-10 flex-row items-center justify-center'>
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
        </div>
        {/* Together with */}
        <div className=' from-primary-default to-secondary-default mt-8 inline-block rounded-2xl bg-gradient-to-r p-1'>
          <div className='bg-primary-bg w-full rounded-xl border-2 bg-clip-border p-2'>
            <span className='h3 text-primary-default'>разом з</span>{' '}
            <span className='h2 to-secondary-default from-primary-default ml-2 bg-gradient-to-r  bg-clip-text text-transparent'>
              Art Comfort
            </span>
          </div>
        </div>
        <motion.p className='p text-primary-defaultStrong mt-8 md:pr-4'>
          Створення середовищ спокою: Де точність клімату поєднується з
          особистим комфортом.
        </motion.p>
      </div>
      <div className='mt-16'>
        <PartnersSection />
      </div>
    </section>
  );
};
