import dayjs, { Dayjs } from 'dayjs';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
    <section id='#news' className='flex w-screen flex-col px-6 py-24'>
      <h1>News Section</h1>
      {/* News Container */}
      <div className='relative mt-4 flex-1'>
        {mockNews.map((item, index) => (
          <div
            key={index}
            className='group mt-4 flex flex-row border bg-slate-100 p-4'
          >
            {/* News */}
            <div className='flex flex-1 flex-col'>
              <h2 className='h3 mb-2'>{item.title}</h2>
              <p className='mb-2 italic'>{item.date.format('DD.MM.YYYY')}</p>
              <p>{item.description}</p>
              <Link href={`/news/${item.id}`}>
                <motion.button className='mt-4 border px-8 py-2 transition-all hover:border-zinc-100 hover:bg-slate-950 hover:text-zinc-100'>
                  See details
                </motion.button>
              </Link>
            </div>
            {/* Image */}
            <div
              className={clsxm([
                'ml-4 flex aspect-video w-60 border border-slate-500 bg-slate-950',
                // w-full
              ])}
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
      <motion.div className='mt-4'>
        <button className='border px-8 py-2 text-lg'>See all news</button>
      </motion.div>
    </section>
  );
};
