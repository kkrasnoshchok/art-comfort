import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';
import { services } from '@/utils/dataset/services.dataset';

const ServicesPage = () => {
  const router = useRouter();
  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const navigateBackToHome = () => {
    router.replace('/', undefined, { shallow: true, scroll: false });
  };
  return (
    <Layout>
      <motion.div className={clsxm('flex w-full items-center justify-center')}>
        <motion.div className='w-11/12 rounded-lg pt-12'>
          <motion.div>
            <Button
              label='Повернутись на головну'
              onClick={navigateBackToHome}
            />
          </motion.div>
          <motion.h1 className='h1 text-primary-defaultStrong mt-8'>
            Список послуг
          </motion.h1>
          <motion.div className='mt-8 pb-32'>
            {services.map((service) => (
              <motion.div
                className='border-primary-defaultStrong mt-4 flex items-center rounded-3xl border p-4 backdrop-blur-lg'
                key={service.title}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.6, once: false }}
                transition={{ duration: 0.2 }}
              >
                <motion.div className='flex-1'>
                  <motion.h3 className='text-primary-defaultStrong'>
                    {service.title}
                  </motion.h3>
                  <motion.p>{service.description}</motion.p>
                  <motion.div className='mt-4'>
                    <Button
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
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ServicesPage;
