import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
// @ts-expect-error react-slick types are present, but written really poorly.
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Layout } from '@/components/layout';

import { Modal } from '@/ui/Modal';
import { cn } from '@/utils/cn';
import { team } from '@/utils/dataset/team.dataset';

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
  return (
    <Layout>
      <div className='flex w-full justify-center bg-white bg-opacity-75 py-24'>
        <div className='flex max-w-6xl flex-1 flex-col'>
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
          {/* Team Section Link */}
          <div className='mt-8'>
            <h3>Наша команда</h3>
            <div className='mt-8'>
              <Slider
                {...{
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  arrows: true,
                  infinite: true,
                  pauseOnHover: true,
                  autoplay: true,
                }}
              >
                {team.map((user, index) => (
                  <motion.div
                    key={`user-${user.email} -> ${index}`}
                    className={cn('team-element group relative w-full pr-4')}
                  >
                    <div
                      className={cn([
                        'bg-grayscale-headerWeak aspect-square w-full rounded-xl',
                      ])}
                    ></div>
                    <div className={cn('p-2')}>
                      <h4 className='text-primary-defaultStrong h4'>
                        {user.name}
                      </h4>
                      <p className='p'>{user.role}</p>
                      {/* <div className='flex flex-row items-center'>
                        <Button
                          theme='ghost'
                          href={`mailto:${user.email}`}
                          className='text-primary-defaultStrong h4'
                          label={user.email}
                        />
                      </div> */}
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </div>
          </div>
          {/* Licenses & Certificates Link */}
          <div className='mt-8'>
            <h3>Ліцензії та сертифікати</h3>
            <div className='mt-4 flex flex-row justify-between gap-2'>
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
