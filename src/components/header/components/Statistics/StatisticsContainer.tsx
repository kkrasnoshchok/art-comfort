import { motion } from 'framer-motion';
import { Ref } from 'react';
import CountUp from 'react-countup';

type Statistics = {
  name: string;
  value: number;
};

const mockStatistics: Statistics[] = [
  {
    name: 'Years of Experience',
    value: 10,
  },
  {
    name: 'Projects Completed',
    value: 50,
  },
  {
    name: 'Clients Served',
    value: 100,
  },
  // Add more statistics as needed
];

export const StatisticsContainer = () => (
  <motion.div className='mt-12 grid grid-cols-1 gap-4 px-6 md:grid-cols-3'>
    {mockStatistics.map((statistic, index) => (
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
