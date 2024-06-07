import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';

import { Button } from '@/ui/Button';
import { cn, useTranslations } from '@/utils';
import { services } from '@/utils/dataset/services.dataset';

const ServicePage = () => {
  const router = useRouter();
  const { services: servicesTranslations } = useTranslations();
  const service = services(servicesTranslations).find(
    (service) => service.id === router.query.slug
  );
  if (!service) {
    return null;
  }
  return (
    <Layout>
      <motion.div
        className={cn('flex w-full flex-col items-start px-16 pb-24 pt-12')}
      >
        <div className={cn('w-full p-8')}>
          <motion.div>
            <Button label='Back' onClick={router.back} />
          </motion.div>
          <motion.h1 className='text-primary-defaultStrong mt-8'>
            {service.title}
          </motion.h1>
          {/* Long Details */}
          <motion.p className='text-primary-defaultWeak mt-8'>
            {service.description}
          </motion.p>
          {/* Images Grid */}
          <motion.div className='grid-row mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <motion.div
                  key={`image_${index}`}
                  className={cn([
                    'bg-primary-defaultStrong flex aspect-square h-full w-full overflow-hidden rounded-3xl border-slate-500',
                    index === 2 && 'col-span-2 row-span-2',
                  ])}
                >
                  <Image
                    src={service.url}
                    className={cn(
                      'aspect-square h-full w-full object-cover',
                      'opacity-20 transition-all group-hover:scale-110 group-hover:opacity-10'
                    )}
                    alt={service.title}
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ServicePage;
