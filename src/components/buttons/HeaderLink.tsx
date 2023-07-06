import { motion } from 'framer-motion';

type HeaderLinkProps = {
  href: string;
  title: string;
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => void;
  // active?: boolean;
};

export const HeaderLink = ({ title, ...props }: HeaderLinkProps) => (
  <motion.a
    whileHover={{
      scale: 1.1,
      borderColor: '#000000',
      color: '#1e272e',
    }}
    className='rounded- border-b-2 border-transparent px-2'
    {...props}
  >
    {title}
  </motion.a>
);
