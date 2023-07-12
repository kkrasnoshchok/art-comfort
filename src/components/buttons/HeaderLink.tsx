import { motion } from 'framer-motion';

import clsxm from '@/lib/clsxm';

type HeaderLinkProps = {
  href: string;
  title: string;
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => void;
  className?: string;
  // active?: boolean;
};

export const HeaderLink = ({ title, className, ...props }: HeaderLinkProps) => (
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
