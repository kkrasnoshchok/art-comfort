import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/button';
import { cn } from '@/utils';
import { services } from '@/utils/dataset/services.dataset';
import { useTranslations } from '@/utils/locales';

const ServicePage = () => {
  const router = useRouter();
  const { services: servicesTranslations, general } = useTranslations();
  const service = services(servicesTranslations).find(
    (service) => service.id === router.query.slug
  );
  if (!service) {
    return null;
  }
  return (
    <Layout>
      <SectionWrapper>
        <motion.div
          className={cn(
            'justi flex w-full max-w-7xl flex-col items-start pt-16'
          )}
        >
          <motion.div>
            <Button label={general.backToMain} onClick={router.back} />
          </motion.div>
          <motion.h1 className='text-primary-defaultStrong mt-8'>
            {service.title}
          </motion.h1>
          <motion.p className='text-primary-defaultWeak mt-8'>
            {service.longDescription}
          </motion.p>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ServicePage;
