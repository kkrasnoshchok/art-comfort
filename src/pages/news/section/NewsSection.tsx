import dayjs, { Dayjs } from 'dayjs';
import { motion } from 'framer-motion';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';

export const mockNews: {
  id: string;
  title: string;
  description: string;
  date: Dayjs;
}[] = [
  {
    id: 'AB12',
    title: 'Stay Cool This Summer with Our Energy-Efficient AC Units',
    description:
      "Discover the latest in energy-efficient air conditioning technology. Our cutting-edge AC units will keep your home cool and comfortable while saving you money on your energy bills. Don't break a sweat this summer – choose the best cooling solution!",
    date: dayjs('2023-05-15'),
  },
  {
    id: 'CDEF',
    title: 'Winter is Coming: Prepare Your HVAC System for the Cold Season',
    description:
      "As the temperatures drop, it's essential to ensure your heating system is in top shape. Learn about our winter HVAC maintenance services, and get your system ready for the frosty days ahead. Stay warm and cozy all winter long!",
    date: dayjs('2023-10-01'),
  },
  {
    id: 'GHIJ',
    title: 'Indoor Air Quality Matters – Tips for a Healthier Home',
    description:
      "Your home's indoor air quality plays a crucial role in your family's health. Discover our top tips for improving indoor air quality, from regular filter changes to advanced air purification solutions. Breathe easier and live better!",
    date: dayjs('2023-02-20'),
  },
  {
    id: 'KLMN',
    title: 'Announcing Our New HVAC Repair Service: Fast and Reliable Fixes',
    description:
      "In case your HVAC system needs urgent attention, we've launched a new repair service. Our expert technicians are ready to diagnose and fix any issues, ensuring your home remains comfortable all year round. Trust the experts for quick and reliable solutions!",
    date: dayjs('2023-07-12'),
  },
];

export const NewsSection = () => {
  return (
    <SectionWrapper
      sectionProps={{ id: '#news' }}
      className='pb-0'
      innerClassName='bg-gradient-to-b'
    >
      <div className='border-primary-bg flex w-11/12 flex-col rounded-[36px] border-2 bg-gray-50 bg-opacity-25 p-8 shadow-xl backdrop-blur-2xl'>
        <h1 className='h1 text-primary-defaultStrong'>Новини</h1>
        {/* News Container */}
        <div className='relative mt-4 flex-1'>
          {mockNews.map((item, index) => (
            <div
              key={index}
              className='border-primary-defaultWeak group mt-4 flex flex-row rounded-3xl border-2 bg-gray-50 bg-opacity-50 p-4'
            >
              {/* News */}
              <div className='flex flex-1 flex-col'>
                <h3 className='h3 text-primary-defaultStrong'>{item.title}</h3>
                <p className='text-primary-defaultWeak mb-2 italic'>
                  {item.date.format('DD.MM.YYYY')}
                </p>
                <p className='p text-primary-default'>{item.description}</p>
                <div>
                  <Button
                    label='Дізнатись деталі'
                    href={`/news/${item.id}`}
                    theme='primary'
                    size='medium'
                    className='mt-4'
                  />
                </div>
                {/* <Link href={`/news/${item.id}`}>
                  <motion.button className='mt-4 border px-8 py-2 transition-all hover:border-zinc-100 hover:bg-slate-950 hover:text-zinc-100'>
                    See details
                  </motion.button>
                </Link> */}
              </div>
              {/* Image */}
              <div
                className={clsxm(
                  'bg-primary-defaultStrong ml-4 flex aspect-video w-60 rounded-2xl border border-slate-500'
                )}
              >
                {/* <Image
                src={project.url}
                className='aspect-video h-full w-full object-cover opacity-40 transition-all group-hover:opacity-100'
                alt={project.title}
              /> */}
              </div>
            </div>
          ))}
        </div>
        <motion.div className='mt-8'>
          <Button label='Подивитись всі новини' href='/news' />
          {/* <button className='border px-8 py-2 text-lg'>See all news</button> */}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
