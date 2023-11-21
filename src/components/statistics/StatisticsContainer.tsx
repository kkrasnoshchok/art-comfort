import { motion } from 'framer-motion';
import { Ref } from 'react';
import CountUp from 'react-countup';

type Statistics = {
  name: string;
  value: number;
};

const statistics: Statistics[] = [
  {
    name: 'Років досвіду',
    value: 16,
  },
  {
    name: 'Успішно завершених проєктів',
    value: 50,
  },
  {
    name: 'Постійних клієнтів',
    value: 100,
  },
];

export const StatisticsContainer = () => (
  <motion.div className='mt-8 grid w-11/12 grid-cols-1 gap-4 md:grid-cols-3'>
    {statistics.map((statistic, index) => (
      <div
        key={index}
        className='border-primary-bg flex flex-col items-center justify-center rounded-2xl border-2 bg-slate-100 bg-opacity-25 p-4 shadow-md'
      >
        <CountUp useEasing start={0} end={statistic.value} duration={2.5}>
          {({ countUpRef, start }) => (
            <motion.h1
              ref={countUpRef as Ref<HTMLHeadingElement>}
              className='text-primary-defaultStrong'
              onViewportEnter={() => start()}
            />
          )}
        </CountUp>
        <h3 className='text-primary-default mt-2 text-xl font-semibold'>
          {statistic.name}
        </h3>
      </div>
    ))}
  </motion.div>
);
