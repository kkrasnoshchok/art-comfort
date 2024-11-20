import { cn } from '@/utils';
import { staticNews } from '@/utils/dataset/news.dataset';
import dayjs from 'dayjs';
import Image from 'next/image';
import { IoNewspaperOutline } from 'react-icons/io5';

export const NewsListSection = () => {
  return (
    <div className=''>
      <div className='flex flex-row items-center'>
        <IoNewspaperOutline />
        <h4 className='ml-2'>Aktualnosci</h4>
      </div>
      <div className='mt-2 flex flex-col gap-4'>
        {staticNews.map((news) => {
          return (
            <div key={news.id} className='flex flex-col'>
              <div className='flex flex-row'>
                <div className=''>
                  <Image src={news.url} className='w-64' alt={news.title} />
                </div>
                <div className='ml-2'>
                  <p className='text-sm text-gray-400'>
                    {dayjs(news.date).format('DD.MM.YYYY')}
                  </p>
                  <p className='text-sm font-semibold text-slate-900'>
                    {news.title}
                  </p>
                </div>
              </div>
              <div className='mt-2'>
                <p className='text-sm'>
                  {news.description.split('').slice(0, 120)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
