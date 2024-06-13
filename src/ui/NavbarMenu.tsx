'use client';
import { motion } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

import { cn } from '@/utils';

const MotionLink = motion(Link);

// const transition = {
//   type: 'spring',
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// };

type MenuItemProps = {
  className?: string;
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href: string;
};

export const MenuItem = (props: MenuItemProps) => {
  const { setActive, item, href, className = '' } = props;
  return (
    <MotionLink
      passHref
      href={href}
      onMouseEnter={() => setActive(item)}
      className={cn(className, 'relative')}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-black hover:opacity-[0.9] dark:text-white'
      >
        {item}
      </motion.p>
    </MotionLink>
  );
};

export const Menu = ({
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      className={cn(
        'relative space-x-8 rounded-lg border border-transparent bg-white py-2 shadow-lg dark:border-white/[0.2] dark:bg-black',
        className
      )}
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: LinkProps & { children: ReactNode }) => {
  return (
    <Link
      {...rest}
      className='text-neutral-700 hover:text-black dark:text-neutral-200 '
    >
      {children}
    </Link>
  );
};
