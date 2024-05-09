import { motion } from 'framer-motion';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';
import { Tabs } from '@/components/ui/tabs';

import { clsxm } from '@/utils';
import { cn } from '@/utils/cn';
import { Service, services } from '@/utils/dataset/services.dataset';

const ServicesPage = () => {
  return (
    <Layout>
      <SectionWrapper>
        <motion.div
          className={clsxm(
            'flex w-full max-w-7xl flex-col justify-center pt-12'
          )}
        >
          <h3 className='text-grayscale-header mt-8'>
            Які послуги ми надаємо?
          </h3>
          <TabsDemo />
          {/* <div className='mt-4'>
            {services.map((service) => (
              <motion.div
                className='border-grayscale-body mt-2 flex items-center rounded-xl border p-4 backdrop-blur-lg'
                key={service.title}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.6, once: false }}
                transition={{ duration: 0.2 }}
              >
                <motion.div className='flex-1'>
                  <h4 className='text-grayscale-body'>{service.title}</h4>
                  <motion.p className='mt-2 text-sm'>
                    {service.description}
                  </motion.p>
                  <motion.div className='mt-2'>
                    <Button
                      size='small'
                      href={`projects/${service.id}`}
                      label='Детальніше'
                    />
                  </motion.div>
                </motion.div>
                <div
                  className={clsxm(
                    'bg-primary-defaultStrong ml-4 flex aspect-video w-60 rounded-2xl border border-slate-500'
                  )}
                >
                  <Image
                    src={service.url}
                    className='aspect-video h-full w-full object-cover opacity-40 transition-all group-hover:opacity-100'
                    alt={service.title}
                  />
                </div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ServicesPage;

const getTabsContent = (service: Service): JSX.Element => (
  <div className='from-grayscale-body to-grayscale-headerWeak relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br p-10 text-white'>
    <p className='text-lg font-bold'>{service.title}</p>
    <p className='text-md mt-4'>{service.description}</p>
  </div>
);
const servicesTabsWithContent = services.map((service) => ({
  title: service.title,
  value: service.id,
  content: getTabsContent(service),
}));

export function TabsDemo() {
  return (
    <div
      className={cn(
        'relative mt-8 h-[20rem] w-full max-w-7xl [perspective:1000px] md:h-[40rem]',
        'flex flex-col items-start justify-start'
      )}
    >
      <Tabs tabs={servicesTabsWithContent} />
    </div>
  );
}
