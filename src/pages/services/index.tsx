import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';
import { Tabs } from '@/components/ui/tabs';

import { clsxm, useBreakpoint, useTranslations } from '@/utils';
import { cn } from '@/utils/cn';
import { Service, services } from '@/utils/dataset/services.dataset';

const ServicesPage = () => {
  return (
    <Layout>
      <SectionWrapper>
        <motion.div
          className={clsxm(
            'mx-4 flex w-full max-w-6xl flex-col justify-center pt-12'
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

export function TabsDemo() {
  const { services: servicesTranslations } = useTranslations();
  const memoizedServices = useMemo(
    () => services(servicesTranslations),
    [servicesTranslations]
  );
  const { isMd } = useBreakpoint('md');

  const getTabsContent = (service: Service): JSX.Element => (
    <div className='from-grayscale-body to-grayscale-headerWeak relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br p-2 text-white'>
      <p className='text-sm font-bold md:text-lg'>{service.title}</p>
      <div className='mt-2 flex w-full flex-col gap-2 md:flex-row-reverse'>
        <Image
          className='aspect-video h-full w-full rounded-lg md:w-1/2'
          src={service.url}
          alt={service.title}
        />
        <p className='text-[0.7rem] leading-[0.7rem] md:text-sm'>
          {service.longDescription}
        </p>
      </div>
    </div>
  );

  const servicesTabsWithContent = memoizedServices.map((service) => ({
    title: service.title,
    value: service.id,
    content: getTabsContent(service),
  }));
  return (
    <div
      className={cn(
        'relative mb-8 mt-2 h-[38rem] w-full max-w-6xl [perspective:1000px] md:h-[35rem]',
        'flex flex-col items-start justify-start'
      )}
    >
      <Tabs tabs={servicesTabsWithContent} />
    </div>
  );
}
