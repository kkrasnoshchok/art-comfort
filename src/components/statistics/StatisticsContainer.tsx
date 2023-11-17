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
  <motion.div className='mt-12 grid w-full grid-cols-1 gap-4 px-6 md:grid-cols-3'>
    {statistics.map((statistic, index) => (
      <div
        key={index}
        className='flex flex-col items-center justify-center border border-slate-300 bg-slate-100 bg-opacity-50 p-4'
      >
        <CountUp useEasing start={0} end={statistic.value} duration={2.5}>
          {({ countUpRef, start }) => (
            <motion.h1
              ref={countUpRef as Ref<HTMLHeadingElement>}
              className='text-gray-600'
              onViewportEnter={() => {
                start();
              }}
            />
          )}
        </CountUp>
        <h3 className='mt-2 text-xl font-semibold'>{statistic.name}</h3>
      </div>
    ))}
  </motion.div>
);
