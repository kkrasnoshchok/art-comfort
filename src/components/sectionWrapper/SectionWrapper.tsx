import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';

import { clsxm } from '@/utils';

type Props = {
  className?: string;
  children: ReactNode;
  sectionProps?: HTMLMotionProps<'section'>;
};

export const SectionWrapper = (props: Props) => {
  const { className, children, sectionProps } = props;
  return (
    <motion.section
      className={clsxm(
        'relative z-20 flex w-screen items-center justify-center pb-24 pt-12',
        className
      )}
      {...sectionProps}
    >
      {children}
    </motion.section>
  );
};
