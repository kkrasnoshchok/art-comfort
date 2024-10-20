import Image from 'next/image';

import ratyBgz from '@/assets/ratyBgzBnp.png';
import retelnaFirma from '@/assets/rzetelnaFirma.png';
import { cn } from '@/utils';

export const InfoSection = () => {
  return (
    <div
      className={cn(
        'mt-8 w-full border-4 border-l-0 border-r-0 bg-slate-300',
        'flex flex-row items-center justify-center'
      )}
    >
      <div
        className={cn(
          'h-full w-full max-w-6xl',
          'py-6',
          'flex flex-row items-start'
        )}
      >
        <div className='flex-1'>
          <h4 className='text-slate-600'>
            Klimatyzacja Warszawa, Montaż i Serwis Klimatyzacji
          </h4>
          <p className='text-slate-700'>
            Oferujemy montaż klimatyzacji (ze stawką 8% VAT), usługi przeglądu i
            serwisu klimatyzatorów producentów Mitsubishi, Daikin, Fujitsu,
            Samsung, Lg, Gree. Bezpłatna wycena klimatyzacji w mieszkaniu, domu
            i biurze (Warszawa i okolice). Sprawdź ponad 1000 rekomendacji /
            opinii Google od naszych Klientów
          </p>
        </div>
        <div className='flex h-full w-1/3 flex-1 flex-row items-start justify-center gap-4 pt-4'>
          <Image src={ratyBgz} alt='raty bgz' className='object-contain' />
          <Image
            src={retelnaFirma}
            alt='rzetelna firma'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
};
