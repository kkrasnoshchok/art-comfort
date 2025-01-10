import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
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
            <Button
              label={general.backToList}
              size='small'
              onClick={router.back}
            />
          </motion.div>
          <h2 className='text-grayscale-header mt-8'>{service.title}</h2>
          <Markdown
            className='mt-4'
            components={{
              ul: (props) => (
                <ul {...props} style={{ listStyleType: 'circle' }} />
              ),
              li: (props) => <li {...props} style={{ marginLeft: '2rem' }} />,
            }}
          >
            {service.longDescription}
          </Markdown>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ServicePage;
