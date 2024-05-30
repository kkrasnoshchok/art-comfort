import { motion, Variants } from 'framer-motion';

import { SectionWrapper } from '@/components/sectionWrapper';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

import { useTranslations } from '@/utils';
import { team } from '@/utils/dataset/team.dataset';

export const TeamSection = () => {
  const { team: teamTranslations } = useTranslations();

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  return (
    <SectionWrapper sectionProps={{ id: 'team' }} className='pb-0'>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.6 }}
        className='mx-4 flex w-full max-w-6xl flex-col pt-8'
      >
        <h1 className='h2 text-grayscale-headerWeak ml-4'>
          {teamTranslations.title}
        </h1>
        <div className='dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black'>
          <InfiniteMovingCards
            items={team}
            direction='left'
            speed='slow'
            pauseOnHover
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
