import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { cn } from '@/utils';
import { services } from '@/utils/dataset/services.dataset';
import { useTranslations } from '@/utils/locales';
import {
  DesignService,
  InstallationService,
  MaintenanceService,
  SupplyService,
} from '@/components/services';

const ServicePage = () => {
  const router = useRouter();
  const { services: servicesTranslations, general } = useTranslations();
  const service = services(servicesTranslations).find(
    (service) => service.id === router.query.slug
  );
  const renderContent = useCallback(() => {
    if (!service) {
      return null;
    }
    switch (router?.query?.slug) {
      case 'design':
        return <DesignService />;
      case 'supply':
        return <SupplyService />;
      case 'installation':
        return <InstallationService />;
      case 'maintenance':
        return <MaintenanceService />;
      default:
        return null;
    }
  }, [router?.query?.slug, service]);
  if (!service) {
    return null;
  }
  return (
    <Layout>
      <SectionWrapper>
        <motion.div
          className={cn(
            'mx-4 flex w-full max-w-7xl flex-col items-start pt-16'
          )}
        >
          <motion.div>
            <Button
              label={general.backToMain}
              size='small'
              onClick={router.back}
            />
          </motion.div>
          <h2 className='text-grayscale-header mt-8'>{service.subtitle}</h2>
          {renderContent()}
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ServicePage;
