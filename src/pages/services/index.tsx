import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';
import { Tabs } from '@/components/ui/tabs';

import { clsxm, useTranslations } from '@/utils';
import { cn } from '@/utils/cn';
import { Service, services } from '@/utils/dataset/services.dataset';

const ServicesPage = () => {
  return (
    <Layout>
      <SectionWrapper>
        <motion.div
          className={clsxm(
            'flex w-full max-w-6xl flex-col justify-center pt-12'
          )}
        >
          <h3 className='text-grayscale-header mt-8'>
            Які послуги ми надаємо?
          </h3>
          <TabsDemo />
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ServicesPage;

const getTabsContent = (service: Service): JSX.Element => (
  <div className='from-grayscale-body to-grayscale-headerWeak relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br p-10 text-white'>
    <p className='text-xl font-bold'>{service.title}</p>
    <div className='mt-8 flex w-full flex-row pb-4'>
      <p className='text-md mr-4'>{service.longDescription}</p>
      <Image
        className='h-full w-1/2 rounded-lg'
        src={service.url}
        alt={service.title}
      />
    </div>
  </div>
);

export function TabsDemo() {
  const { services: servicesTranslations } = useTranslations();
  const memoizedServices = useMemo(
    () => services(servicesTranslations),
    [servicesTranslations]
  );
  const servicesTabsWithContent = memoizedServices.map((service) => ({
    title: service.title,
    value: service.id,
    content: getTabsContent(service),
  }));
  return (
    <div
      className={cn(
        'relative mt-8 h-[20rem] w-full max-w-6xl [perspective:1000px] md:h-[40rem]',
        'flex flex-col items-start justify-start'
      )}
    >
      <Tabs tabs={servicesTabsWithContent} />
    </div>
  );
}
