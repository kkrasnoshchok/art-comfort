import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { Layout } from '@/components/layout';

import { Button } from '@/ui/Button';
import { Modal } from '@/ui/Modal';
import { cn, useBreakpoint } from '@/utils';
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
  const { isSm } = useBreakpoint('sm');
  const [isShownMore, setShownMore] = useState(isSm);
  const { about } = useTranslations();
  return (
    <Layout>
      <div className='flex w-full justify-center bg-white bg-opacity-75 py-24'>
        <div className='mx-4 flex max-w-6xl flex-1 flex-col'>
          <p className='mt-8'>
            Інженерна компанія «АРТ-КОМФОРТ» працює на будівельному ринку з 21
            червня 2007 року. Протягом 17 років професійної діяльності компанії
            нараховується понад 500 успішно реалізованих проєктів у сфері
            вентиляції та кондиціонування в державних установах та великих
            приватних компаніях. Серед переліку завершених об’єктів Замовників є
            цілий спектр наданих відповідних послуг спеціалістами ТОВ
            «АРТ-КОМФОРТ» для створення необхідних та оптимальних умов
            комфортного мікроклімату, потрібного для перебування людей або ж
            протікання технологічних процесів в приміщеннях різного призначення.
            Основними видами послуг у роботі товариства є:
          </p>
          <ul className='list-disc pl-8'>
            <li>обстеження систем вентиляції та кондиціонування;</li>
            <li>
              проєктування систем вентиляції, кондиціонування, зволоження та
              осушення повітря;
            </li>
            <li>
              постачання обладнання систем вентиляції, кондиціонування,
              зволоження та осушення повітря;
            </li>
            <li>
              роботи з реконструкції, монтажу систем вентиляції,
              кондиціонування, зволоження та осушення повітря;
            </li>
            <li>
              технічне обслуговування систем вентиляції, кондиціонування,
              зволоження та осушення повітря;
            </li>
            <li>
              ремонт систем вентиляції, кондиціонування, зволоження та осушення
              повітря тощо.
            </li>
          </ul>
          <p className='mt-4'>
            На сьогоднішній день колектив компанії нараховує 24 чоловік. Серед
            інженерно-технічного складу підприємства досвідчені та
            висококваліфіковані працівники: інженери-проектувальники, керівники
            проектів та монтажники систем вентиляції та кондиціонування повітря.
            ТОВ «АРТ-КОМФОРТ» постійно працює над удосконаленням та підвищенням
            рівня професійності наданих послуг. Якість, відповідальність та
            професіоналізм – головні складові успішного розвитку компанії!
          </p>
          <div className='mt-8'>
            <h3>Наша команда</h3>
            <div className='mt-2 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4'>
              {team
                .slice(0, isShownMore ? team.length : 2)
                .map((user, index) => (
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
                      <span className='text-[0.6rem] font-semibold leading-[0.7rem] text-slate-950'>
                        {user.name}
                      </span>
                      <p className='p hidden text-[0.6rem] leading-[0.7rem] group-hover:block group-hover:opacity-100'>
                        {user.role}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <Button
              label={isShownMore ? about.hideLabel : about.showMoreLabel}
              onClick={() => {
                setShownMore((prev) => !prev);
              }}
              size='small'
              className='mt-4'
            />
          </div>
          <div className='mt-8'>
            <h3>Ліцензії та сертифікати</h3>
            <div className='mt-4 flex flex-col justify-between gap-4 sm:flex-row'>
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
      </div>
    </Layout>
  );
};

export default AboutPage;
