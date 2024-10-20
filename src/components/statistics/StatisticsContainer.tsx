import { motion } from 'framer-motion';
import { Ref } from 'react';
import CountUp from 'react-countup';

import { cn } from '@/utils';
import { TranslationType, useTranslations } from '@/utils/locales';

type Statistics = {
  name: string;
  value: number;
  valueSuffix?: string;
};

const statistics = (t: TranslationType['statistics']): Statistics[] => [
  {
    name: t.experience,
    value: 17,
  },
  {
    name: t.projects,
    value: 5000,
    valueSuffix: '+',
  },
  {
    name: t.clients,
    value: 500,
    valueSuffix: '+',
  },
];

export const StatisticsContainer = () => {
  const { statistics: statisticsTranslations } = useTranslations();
  return (
    <motion.div className='mx-4 mt-8 grid w-full max-w-6xl grid-cols-1 gap-4 md:mt-12 md:grid-cols-3'>
      {statistics(statisticsTranslations).map((statistic, index) => (
        <div
          key={index}
          className={cn(
            'border-primary-bg border',
            'flex flex-col items-center justify-center rounded-2xl p-4 shadow-sm'
          )}
        >
          <CountUp
            useEasing
            start={0}
            end={statistic.value}
            formattingFn={(number) => {
              if (statistic.valueSuffix) {
                return `${number}${statistic.valueSuffix}`;
              }
              return String(number);
            }}
            duration={2.5}
          >
            {({ countUpRef, start }) => (
              <motion.h1
                ref={countUpRef as Ref<HTMLHeadingElement>}
                className='text-graysclale-headerWeak'
                onViewportEnter={() => start()}
              />
            )}
          </CountUp>
          <h3 className='text-graysclale-header mt-2 text-[0.75rem] font-semibold xl:text-xl'>
            {statistic.name}
          </h3>
        </div>
      ))}
    </motion.div>
  );
};
