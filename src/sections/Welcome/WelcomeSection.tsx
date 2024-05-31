import { motion, Variants } from 'framer-motion';
// import WelcomeCityBackground from '@/assets/Welcome_City_Background.jpeg';
// import { LuMouse } from 'react-icons/lu';
import { CiDesktopMouse2 } from 'react-icons/ci';

import { SectionWrapper } from '@/components/sectionWrapper';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Highlight } from '@/components/ui/text-highlight';

import { Button } from '@/ui/Button';
import { useBreakpoint, useTranslations } from '@/utils';

export const WelcomeSection = () => {
  const { welcome, general } = useTranslations();
  const { isLg } = useBreakpoint('lg');
  const { isSm } = useBreakpoint('sm');
  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <SectionWrapper
      sectionProps={{ id: 'about' }}
      className='relative z-20 min-h-screen w-screen pb-0 pt-0'
    >
      <BackgroundGradientAnimation />
      <div className='flex h-full max-w-7xl flex-1 flex-row items-center justify-center gap-4'>
        <div className='mx-4 flex h-full flex-1 flex-col items-center justify-center'>
          <motion.h2
            variants={titleVariants}
            initial='hidden'
            whileInView='visible'
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className='z-30 w-full text-left text-xl lg:text-2xl xl:text-3xl'
          >
            {welcome.title}
            {isSm && !isLg && <br />}
            {(!isSm || isLg) && ' '}
            <Highlight delay={1} duration={1} ease='easeInOut'>
              {welcome.titleNaming}
            </Highlight>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, ease: 'easeInOut' }}
            className='z-30 mt-4 w-full rounded-lg text-left text-base font-medium lg:mt-4'
          >
            <p className='inline-block rounded-lg bg-white bg-opacity-50 px-2 py-1 text-xs md:text-sm lg:px-4 lg:py-2'>
              {welcome.subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, ease: 'easeInOut' }}
            className='z-30 mt-4 flex w-full flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-4'
          >
            <div>
              <Button
                size={isLg ? 'medium' : 'small'}
                label={welcome.servicesLabel}
                theme='secondary'
              />
            </div>
            <div>
              <Button
                size={isLg ? 'medium' : 'small'}
                label={general.contactUs}
                theme='primary'
              />
            </div>
          </motion.div>
        </div>
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
