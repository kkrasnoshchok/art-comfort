import { BsGearFill } from 'react-icons/bs';

import { cn } from '@/utils';

export const ServicesListSection = () => {
  return (
    <div className=''>
      <div className='flex flex-row items-center'>
        <BsGearFill />
        <h4 className='ml-2'>Uslugi</h4>
      </div>
      <div className='mt-2 flex flex-col'>
        {Array(11)
          .fill(0)
          .map((_, index) => (
            <div className='py-1' key={index}>
              {index !== 0 && (
                <div className='separator h-[1px] w-full bg-gray-500'></div>
              )}
              <p className={cn('text-lg', index !== 0 && 'pt-2')}>
                Service With Kind of Description
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
