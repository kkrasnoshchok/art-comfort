import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';

import { clsxm } from '@/utils';

type Props = {
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  sectionProps?: HTMLMotionProps<'section'>;
};

export const SectionWrapper = (props: Props) => {
  const { className, innerClassName, children, sectionProps } = props;
  return (
    <motion.section
      className={clsxm(
        'relative z-20 flex w-screen items-center justify-center pb-24 pt-12',
        className
      )}
      {...sectionProps}
    >
      <motion.div
        className={clsxm(
          'absolute left-0 top-0 -z-10 flex h-full w-full',
          // 'from-primary-bgStrong to-secondary-bgStrong bg-gradient-to-t',
          innerClassName
        )}
      />
      {children}
    </motion.section>
  );
};
