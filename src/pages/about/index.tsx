import Image, { StaticImageData } from 'next/image';
import { useCallback, useState } from 'react';
import Markdown, { Options } from 'react-markdown';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Modal } from '@/ui/Modal';
import { cn } from '@/utils';
import { team } from '@/utils/dataset/team.dataset';
import { useTranslations } from '@/utils/locales';

import AuthListPdf from '../../assets/certificates/AuthListArtComfort.png';
import HaierAirCondDealershipCertificate from '../../assets/certificates/HaierDealershipCertificate.png';
import DealershipCertificateLG from '../../assets/certificates/LGDealershipCertificate.png';
import ArtComfortLicense1 from '../../assets/certificates/License1stPage.png';
import ArtComfortLicense2 from '../../assets/certificates/License2ndPage.png';

const certificatesArray = [
  [ArtComfortLicense1, ArtComfortLicense2],
  AuthListPdf,
  DealershipCertificateLG,
  HaierAirCondDealershipCertificate,
];

const AboutPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (StaticImageData | StaticImageData[]) | null
  >(null);
  const { about: aboutUsTranslations } = useTranslations();

  const BaseMarkdownComponent = useCallback(
    (props: Options) => (
      <Markdown
        components={{
          h2: (props) => <h2 {...props} className='mt-8 text-xl' />,
          p: (props) => <p {...props} className='mt-2' />,
          ol: (props) => <ul {...props} className='ml-8 mt-2 list-decimal' />,
          ul: (props) => <ul {...props} className='ml-8 mt-2 list-disc' />,
        }}
        {...props}
      />
    ),
    []
  );

  return (
    <Layout>
      <SectionWrapper>
        <div className='mx-4 mt-12 flex max-w-7xl flex-1 flex-col'>
          <BaseMarkdownComponent>
            {aboutUsTranslations.aboutUsContent}
          </BaseMarkdownComponent>
          <BaseMarkdownComponent>
            {aboutUsTranslations.missionContent}
          </BaseMarkdownComponent>
          <BaseMarkdownComponent>
            {aboutUsTranslations.visionContent}
          </BaseMarkdownComponent>
          <BaseMarkdownComponent>
            {aboutUsTranslations.whyWeContent}
          </BaseMarkdownComponent>
          <BaseMarkdownComponent>
            {aboutUsTranslations.servicesContent}
          </BaseMarkdownComponent>
          <BaseMarkdownComponent>
            {aboutUsTranslations.teamContent}
          </BaseMarkdownComponent>
          <div className='mt-2 grid grid-cols-7 gap-1'>
            {team.map((user, index) => (
              <div
                key={`user-${user.email} -> ${index}`}
                className={cn('team-element group relative w-full')}
              >
                <div
                  className={cn([
                    'aspect-square flex-1 rounded-xl bg-slate-200',
                  ])}
                />
                <div
                  className={cn(
                    'absolute bottom-2 left-1/2 z-20 w-11/12 -translate-x-1/2',
                    'flex flex-col gap-[1px] bg-slate-300',
                    'rounded-lg p-2'
                  )}
                >
                  <span className='text-[0.8rem] font-semibold leading-[0.8rem] text-slate-950'>
                    {user.name}
                  </span>
                  <p className='p hidden text-[0.6rem] leading-[0.7rem] group-hover:block group-hover:opacity-100'>
                    {user.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <BaseMarkdownComponent>
            {aboutUsTranslations.ourValuesContent}
          </BaseMarkdownComponent>
          <h2 className='mt-8 text-xl'>{aboutUsTranslations.licensesTitle}</h2>
          <div className='mt-2 flex flex-col justify-between gap-4 sm:flex-row'>
            {certificatesArray.map((pdfDoc, index) => (
              <div
                key={index}
                className='flex flex-1 items-center justify-center rounded-2xl bg-slate-100'
                onClick={() => {
                  setSelectedCertificate(pdfDoc);
                }}
              >
                <Image
                  src={Array.isArray(pdfDoc) ? pdfDoc[0] : pdfDoc}
                  alt='index'
                  height={200}
                  width={200}
                  className='pointer-events-none'
                />
              </div>
            ))}
          </div>
          <Modal
            isOpen={!!selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          >
            {selectedCertificate && (
              <div className='flex flex-1 items-center justify-center rounded-2xl'>
                <Image
                  src={
                    Array.isArray(selectedCertificate)
                      ? selectedCertificate[0]
                      : selectedCertificate
                  }
                  alt='certificate'
                />
              </div>
            )}
          </Modal>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default AboutPage;
