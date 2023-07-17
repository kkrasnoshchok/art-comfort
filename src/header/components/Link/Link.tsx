import { motion } from 'framer-motion';

import { clsxm } from '@/utils';

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
    whileHover={{
      scale: 1.1,
      borderColor: '#000000',
      color: '#1e272e',
    }}
    className={clsxm(['border-b-2 border-transparent px-2', className])}
    {...props}
  >
    {title}
  </motion.a>
);
