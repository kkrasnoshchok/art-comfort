import { motion } from 'framer-motion';
// import WelcomeCityBackground from '@/assets/Welcome_City_Background.jpeg';
// import { LuMouse } from 'react-icons/lu';
import { CiDesktopMouse2 } from 'react-icons/ci';

import { SectionWrapper } from '@/components/sectionWrapper';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

import { Button } from '@/ui/Button';
import { useTranslations } from '@/utils';

export const WelcomeSection = () => {
  const { welcome, general } = useTranslations();
  return (
    <SectionWrapper
      sectionProps={{ id: 'about' }}
      className='relative z-20 min-h-screen w-screen pb-0 pt-0'
      innerClassName='pt-0'
    >
      <BackgroundGradientAnimation />
      <div className='flex h-full max-w-7xl flex-1 flex-row items-center justify-center gap-4'>
        <div className='flex h-full flex-1 flex-col items-center justify-center'>
          <TextGenerateEffect
            className='z-30 w-full text-left'
            words={welcome.title}
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 3,
            }}
            className='z-30 mt-8 w-full rounded-lg text-left text-base font-medium'
          >
            <p className='inline-block rounded-lg bg-white bg-opacity-50 px-4 py-2'>
              {/* Абсолютний лідер в сфері кондиціонування та вентиляції вже більше
              <strong> 18-ти років</strong> */}
              {welcome.subtitle}
            </p>
          </motion.div>
          <div className='z-30 mt-8 flex w-full flex-row gap-4'>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 4,
              }}
              className=''
            >
              <Button label={welcome.servicesLabel} theme='secondary' />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 4,
              }}
              className=''
            >
              <Button label={general.contactUs} theme='primary' />
            </motion.div>
          </div>
        </div>
        {/* <div className='z-30 flex h-full flex-1 flex-col items-center justify-center'>
          <div className='flex h-1/2 w-full items-center justify-center rounded-xl bg-white bg-opacity-40'>
            <p>Something inside of box</p>
          </div>
        </div> */}
        <Button
          className='absolute bottom-4 z-30'
          Icon={<CiDesktopMouse2 size={36} />}
          href='#services'
          theme='ghost'
        />
      </div>
    </SectionWrapper>
  );
};
