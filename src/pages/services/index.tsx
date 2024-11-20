import { motion } from 'framer-motion';
import Image from 'next/image';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { cn } from '@/utils';
import { services } from '@/utils/dataset/services.dataset';

const ServicesPage = () => {
  return (
    <Layout>
      <SectionWrapper>
        <motion.div
          className={cn(
            'mx-4 flex w-full max-w-7xl flex-col justify-center pt-24'
          )}
        >
          <h3 className='text-grayscale-header mt-8'>
            Jakie usługi świadczymy?
          </h3>
          <motion.div className='grid w-full grid-cols-none gap-4 pt-4 sm:grid-cols-2 md:grid-cols-4'>
            {services.map((service) => (
              <motion.div
                className='flex flex-col rounded-lg border p-4 shadow-md'
                key={service.title}
              >
                <h4 className='leading-[1.25rem]'>{service.title}</h4>
                <div className='mt-2 rounded-2xl bg-slate-800'>
                  <Image
                    alt={service.title}
                    src={service.url}
                    className='aspect-video overflow-hidden rounded-2xl bg-slate-800 opacity-25'
                  />
                </div>
                <motion.p className='mb-2 mt-2 flex-1 text-[0.8rem] leading-[0.9rem]'>
                  {/* {service.description} */}
                </motion.p>
                <motion.div className='mt-auto'>
                  <Button
                    href={`services/${service.id}`}
                    label='Dowiedz się więcej'
                    size='small'
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ServicesPage;
