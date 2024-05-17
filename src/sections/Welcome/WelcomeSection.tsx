import { motion, Variants } from 'framer-motion';
// import WelcomeCityBackground from '@/assets/Welcome_City_Background.jpeg';
// import { LuMouse } from 'react-icons/lu';
import { CiDesktopMouse2 } from 'react-icons/ci';

import { SectionWrapper } from '@/components/sectionWrapper';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Highlight } from '@/components/ui/text-highlight';

import { Button } from '@/ui/Button';
import { useTranslations } from '@/utils';

export const WelcomeSection = () => {
  const { welcome, general } = useTranslations();
  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <SectionWrapper
      sectionProps={{ id: 'about' }}
      className='relative z-20 min-h-screen w-screen pb-0 pt-0'
      innerClassName='pt-0'
    >
      <BackgroundGradientAnimation />
      <div className='flex h-full max-w-7xl flex-1 flex-row items-center justify-center gap-4'>
        <div className='flex h-full flex-1 flex-col items-center justify-center'>
          <motion.h2
            variants={titleVariants}
            initial='hidden'
            whileInView='visible'
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className='z-30 w-full text-left'
          >
            {welcome.title}{' '}
            <Highlight delay={1} duration={1} ease='easeInOut'>
              {welcome.titleNaming}
            </Highlight>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, ease: 'easeInOut' }}
            className='z-30 mt-8 w-full rounded-lg text-left text-base font-medium'
          >
            <p className='inline-block rounded-lg bg-white bg-opacity-50 px-4 py-2'>
              {welcome.subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, ease: 'easeInOut' }}
            className='z-30 mt-8 flex w-full flex-row gap-4'
          >
            <div>
              <Button label={welcome.servicesLabel} theme='secondary' />
            </div>
            <div>
              <Button label={general.contactUs} theme='primary' />
            </div>
          </motion.div>
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
