'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@/ui/Button';
import { cn, useBreakpoint } from '@/utils';

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const { isMd } = useBreakpoint('md');
  const { isLg } = useBreakpoint('lg');

  return (
    <>
      <div
        className={cn(
          'relative grid w-full max-w-full grid-cols-none gap-1 md:grid-cols-2 lg:grid-cols-4',
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <>
            <Button
              key={tab.title}
              theme={active.value === tab.value ? 'primary' : 'secondary'}
              label={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              className='active:scale-100'
              size={isMd && !isLg ? 'medium' : 'small'}
            />
          </>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering
        className={cn('mt-24', contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className='relative h-full w-full'>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn('absolute left-0 top-0 h-full w-full', className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
