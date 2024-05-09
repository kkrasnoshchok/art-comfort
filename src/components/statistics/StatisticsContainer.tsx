import { motion } from 'framer-motion';
import { Ref } from 'react';
import CountUp from 'react-countup';

import { cn } from '@/utils/cn';

type Statistics = {
  name: string;
  value: number;
  valueSuffix?: string;
};

const statistics: Statistics[] = [
  {
    name: 'Років досвіду',
    value: 17,
  },
  {
    name: 'Успішно завершених проєктів',
    value: 5000,
    valueSuffix: '+',
  },
  {
    name: 'Постійних клієнтів',
    value: 500,
    valueSuffix: '+',
  },
];

export const StatisticsContainer = () => (
  <motion.div className='mt-12 grid grid-cols-1 gap-4 md:grid-cols-3'>
    {statistics.map((statistic, index) => (
      <div
        key={index}
        className={cn(
          'border-primary-bg border',
          // 'bg-slate-100 bg-opacity-25',
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
        <h3 className='text-graysclale-header mt-2 text-xl font-semibold'>
          {statistic.name}
        </h3>
      </div>
    ))}
  </motion.div>
);
