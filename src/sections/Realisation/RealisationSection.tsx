import { Button } from '@/ui/Button';
import { GrGallery } from 'react-icons/gr';

export const RealisationSection = () => {
  return (
    <div className=''>
      <div className='flex flex-row items-center'>
        <GrGallery />
        <h4 className='ml-2'>Realizacje</h4>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-2'>
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div className='h-32 w-full bg-gray-300' key={index}></div>
          ))}
      </div>
    </div>
  );
};
