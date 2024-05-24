'use client';
import { motion } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

import { cn } from '@/utils/cn';

const MotionLink = motion(Link);

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href: string;
}) => {
  return (
    <MotionLink
      href={href}
      onMouseEnter={() => setActive(item)}
      className='relative'
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-black hover:opacity-[0.9] dark:text-white'
      >
        {item}
      </motion.p>
      {/* {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute left-1/2 top-[calc(100%_+_1.7rem)] -translate-x-1/2 transform'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className='h-full w-max p-4'
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )} */}
    </MotionLink>
  );
};

export const Menu = ({
  // active,
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => {
        setTimeout(() => {
          setActive(null);
        }, 500);
      }}
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
