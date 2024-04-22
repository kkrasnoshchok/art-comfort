import { motion } from 'framer-motion';

import { SectionWrapper } from '@/components/sectionWrapper';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

import { Button } from '@/ui/Button';
import { cn } from '@/utils/cn';

export const WelcomeSection = () => {
  return (
    <SectionWrapper
      sectionProps={{ id: 'about' }}
      className='relative z-20 flex min-h-screen w-screen flex-col items-center justify-center pt-0'
      innerClassName='pt-0'
    >
      <BackgroundGradientAnimation />
      <TypewriterEffect
        className={cn(
          'relative z-30 mx-16 rounded-lg bg-white  px-4 py-2',
          'text-3xl'
        )}
        words={[
          {
            text: 'Досліджуй',
            className: 'text-blue-900',
          },
          {
            text: 'справжнє',
            className: 'text-blue-900',
          },
          {
            text: 'мистецтво',
            className: 'text-blue-900',
          },
          {
            text: 'комфорту',
            className: 'text-blue-900',
          },
          {
            text: 'з',
            className: 'text-blue-900',
          },
          {
            text: 'Арт-Комфорт',
            className: 'text-blue-900',
          },
        ]}
      />
      <motion.div
        initial={{
          opacity: 0,
          y: -120,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 5,
        }}
        className='z-30 mt-16 rounded-lg bg-white px-4 py-2 text-base font-medium'
      >
        Абсолютний лідер в сфері кондиціонування та вентиляції вже протягом 18
        років
      </motion.div>
      <div className='z-30 mt-8 flex flex-row gap-4'>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 6,
          }}
          className=''
        >
          <Button label='Детальніше про послуги' theme='secondary' />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 6,
          }}
          className=''
        >
          <Button label='Звʼязатись з нами' theme='primary' />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
