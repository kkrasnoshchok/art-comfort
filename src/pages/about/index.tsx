// import { PDFViewer } from '@react-pdf/renderer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components/layout';

import { team } from '@/utils/dataset/team.dataset';
import { vacancies } from '@/utils/dataset/vacancies.dataset';
import { slugify } from '@/utils/slugify';

import AuthListPdf from '../../assets/certificates/AuthListArtComfort.png';
import HaierAirCondDealershipCertificate from '../../assets/certificates/HaierDealershipCertificate.png';
import DealershipCertificateLG from '../../assets/certificates/LGDealershipCertificate.png';
import ArtComfortLicense1 from '../../assets/certificates/License1stPage.png';
import ArtComfortLicense2 from '../../assets/certificates/License2ndPage.png';

const certificatesArray = [
  AuthListPdf,
  DealershipCertificateLG,
  HaierAirCondDealershipCertificate,
  [ArtComfortLicense1, ArtComfortLicense2],
];

const MotionLink = motion(Link);

const AboutPage = () => {
  return (
    <Layout>
      <div className='bg-primary-defaultStrong h-full min-h-screen w-full'>
        <div className='bg-white bg-opacity-100'>
          <div className='px-[2%] py-16'>
            <p className='mt-8'>
              Інженерна компанія «АРТ-КОМФОРТ» працює на будівельному ринку з 21
              червня 2007 року. Протягом 17 років професійної діяльності
              компанії нараховується понад 500 успішно реалізованих проєктів у
              сфері вентиляції та кондиціонування в державних установах та
              великих приватних компаніях. Серед переліку завершених об’єктів
              Замовників є цілий спектр наданих відповідних послуг спеціалістами
              ТОВ «АРТ-КОМФОРТ» для створення необхідних та оптимальних умов
              комфортного мікроклімату, потрібного для перебування людей або ж
              протікання технологічних процесів в приміщеннях різного
              призначення. Основними видами послуг у роботі товариства є:
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
                ремонт систем вентиляції, кондиціонування, зволоження та
                осушення повітря тощо.
              </li>
            </ul>
            <p className='mt-4'>
              На сьогоднішній день колектив компанії нараховує 24 чоловік. Серед
              інженерно-технічного складу підприємства досвідчені та
              висококваліфіковані працівники: інженери-проектувальники,
              керівники проектів та монтажники систем вентиляції та
              кондиціонування повітря. ТОВ «АРТ-КОМФОРТ» постійно працює над
              удосконаленням та підвищенням рівня професійності наданих послуг.
              Якість, відповідальність та професіоналізм – головні складові
              успішного розвитку компанії!
            </p>
            {/* Licenses & Certificates Link */}
            <div className='mt-8'>
              <h3>Ліцензії та сертифікати</h3>
              <div className='mt-4 flex flex-row justify-between gap-2'>
                {certificatesArray.map((pdfDoc, index) => (
                  <div
                    key={index}
                    className='flex h-48 flex-1 items-center justify-center rounded-2xl bg-slate-100'
                  >
                    <Image
                      src={Array.isArray(pdfDoc) ? pdfDoc[0] : pdfDoc}
                      alt='index'
                      height={100}
                      width={100}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Vacancies Link */}
            <div className='mt-8'>
              <h3>Наші відкриті позиції</h3>
              <div className='mt-4 flex flex-col gap-2'>
                {vacancies.map((vacancy) => (
                  <MotionLink
                    href={`/vacancies/${slugify(
                      `${vacancy.id} ${vacancy.jobTitle} ${vacancy.location}`
                    )}`}
                    className='cursor-pointer rounded-3xl bg-slate-50 px-3 py-2'
                    key={vacancy.id}
                    whileHover={{
                      scale: 1.009,
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                  >
                    {vacancy.jobTitle}
                  </MotionLink>
                ))}
              </div>
            </div>
            {/* Team Section Link */}
            <div className='mt-8'>
              <h3>Наша команда</h3>
              <div className='mt-4 flex flex-1 flex-row flex-wrap gap-3'>
                {team.map((member) => (
                  <div
                    key={member.name}
                    className='flex flex-1 items-center justify-center rounded-3xl bg-slate-100'
                  >
                    {member.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
