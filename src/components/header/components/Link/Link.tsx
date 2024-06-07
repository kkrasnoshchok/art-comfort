import { motion } from 'framer-motion';

import { cn } from '@/utils';

type HeaderLinkProps = {
  href: string;
  title: string;
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => void;
  className?: string;
  // active?: boolean;
};

export const Link = ({ title, className, ...props }: HeaderLinkProps) => (
  <motion.a
    className={cn(['border-b-2 border-transparent px-2', className])}
    {...props}
  >
    {title}
  </motion.a>
);
