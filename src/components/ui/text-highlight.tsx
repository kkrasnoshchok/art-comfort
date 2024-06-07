import { Easing, motion } from 'framer-motion';

import { cn } from '@/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: Easing | Easing[];
};

export const Highlight = (props: Props) => {
  const {
    children,
    className,
    delay = 0.5,
    duration = 2,
    ease = 'linear',
  } = props;
  return (
    <motion.span
      initial={{ backgroundSize: '0% 100%' }}
      animate={{ backgroundSize: '100% 100%' }}
      transition={{
        duration,
        ease,
        delay,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        'relative inline-block rounded-lg px-1 pb-1',
        'bg-gradient-to-r from-indigo-300 to-purple-300',
        'dark:from-indigo-500 dark:to-purple-500',
        className
      )}
    >
      {children}
    </motion.span>
  );
};
