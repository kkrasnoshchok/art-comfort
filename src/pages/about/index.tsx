import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Modal } from '@/ui/Modal';
import { Button } from '@/ui/Button';
import { useTranslations } from '@/utils/locales';

import AuthListPdf from '../../assets/certificates/AuthListArtComfort.png';
import HaierAirCondDealershipCertificate from '../../assets/certificates/HaierDealershipCertificate.png';
import DealershipCertificateLG from '../../assets/certificates/LGDealershipCertificate.png';
import ArtComfortLicense1 from '../../assets/certificates/License1stPage.png';
import ArtComfortLicense2 from '../../assets/certificates/License2ndPage.png';
import DosvilLicense from '../../assets/certificates/Dosvil.png';
import HisenseDealership from '@/assets/certificates/Hisense_Dealership.png';
import KyivKlimatDealership from '@/assets/certificates/Kyiv-Klimat_Dealership.png';
import SunIceDealership from '@/assets/certificates/Sun-Ice_Dealership.png';
import LikohdDaikinDealership from '@/assets/certificates/Likohd_Daikin_Dealership.png';
import LikohdDaikinDealershipSecond from '@/assets/certificates/Likohd_Daikin_Dealership_Second.png';
import NovaformDealership from '@/assets/certificates/Novaform_Dealership.png';
import { SelectedCertificateModal } from '@/components/SelectedCertificateModal';

type CertificateType = {
  title: string;
  source: StaticImageData | StaticImageData[];
};

const certificatesArray: CertificateType[] = [
  {
    title: 'ART-COMFORT License',
    source: [ArtComfortLicense1, ArtComfortLicense2],
  },
  {
    title: 'ART-COMFORT Dozvil',
    source: DosvilLicense,
  },
  {
    title: 'ART-COMFORT Auth List',
    source: AuthListPdf,
  },
  {
    title: 'ART-COMFORT Dealership',
    source: DealershipCertificateLG,
  },
  {
    title: 'Haier Air-Conditioning Dealership Certificate',
    source: HaierAirCondDealershipCertificate,
  },
  {
    title: 'Hisense Dealership Certificate',
    source: HisenseDealership,
  },
  {
    title: 'Kyiv Klimat Dealership Certificate',
    source: KyivKlimatDealership,
  },
  {
    title: 'Sun Ice Dealership Certificate',
    source: SunIceDealership,
  },
  {
    title: 'Novaform Dealership Certificate',
    source: NovaformDealership,
  },
  {
    title: 'Likohd Daikin Dealership Certificate',
    source: [LikohdDaikinDealership, LikohdDaikinDealershipSecond],
  },
];

const AboutPage = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType | null>(null);
  const { about: aboutUsTranslations } = useTranslations();

  return (
    <>
      <Layout>
        <SectionWrapper>
          <div className='mx-4 mt-12 flex max-w-7xl flex-1 flex-col'>
            <h2>Про нас – ART-COMFORT: HVAC-рішення для України та Європи</h2>
            <hr className='my-4' />
            <h4>Хто ми?</h4>
            <p className='mt-2'>
              Компанія ART-COMFORT з 21 червня 2007 року створює комфортні
              кліматичні умови для своїх клієнтів – як приватних осіб, так і
              великих бізнесів. За 17 років роботи ми успішно реалізували понад
              500 проектів у сфері вентиляції, кондиціонування, зволоження та
              осушення повітря для державних установ і великих компаній в
              Україні та Європі.
            </p>
            <p className='mt-2'>
              Наша мета – надавати енергоефективні, надійні та сучасні рішення,
              які забезпечують комфорт і оптимальний мікроклімат для людей та
              технологічних процесів.
            </p>
            <hr className='my-4' />
            <h4>Місія ART-COMFORT</h4>
            <p className='mt-2'>
              Ми прагнемо створювати комфортні, здорові та ефективні середовища
              завдяки високоякісним продуктам та послугам у сфері HVAC. Кожна
              наша реалізація – це синонім інноваційності, надійності та
              задоволення потреб наших клієнтів.
            </p>
            <hr className='my-4' />
            <h4>Наше бачення</h4>
            <p className='mt-2'>
              ART-COMFORT прагне стати провідною компанією у сфері HVAC у
              Європі, відомою своїми інноваційними підходами, професіоналізмом і
              високим рівнем обслуговування. Ми хочемо бути першим вибором для
              клієнтів, які шукають комплексні та довговічні рішення у
              вентиляції, кондиціонуванні, осушенні й зволоженні повітря.
            </p>
            <hr className='my-4' />
            <h4>Чому обирають ART-COMFORT?</h4>
            <ol className='ml-4 mt-2 flex list-decimal flex-col gap-2'>
              <li>
                <p>Досвід і професіоналізм</p>
                <ul className='ml-4 list-disc text-sm'>
                  <li>
                    <i>17</i> років досвіду у сфері HVAC.
                  </li>
                  <li>
                    Понад <i>500</i> успішно реалізованих проектів.
                  </li>
                  <li>
                    Команда з <i>24</i> висококваліфікованих працівників:
                    інженери, монтажники, проектувальники.
                  </li>
                </ul>
              </li>
              <li>
                <p>Інноваційність</p>
                <p className='text-sm'>
                  Ми впроваджуємо сучасні технології та рішення:
                </p>
                <ul className='ml-4 list-disc text-sm'>
                  <li>Використання систем автоматизації (BMS).</li>
                  <li>
                    Проекти з енергоефективними технологіями, включаючи
                    рекуперацію тепла.
                  </li>
                </ul>
              </li>
              <li>
                <p>Комплексний підхід</p>
                <p className='text-sm'>Ми забезпечуємо весь цикл робіт:</p>
                <ul className='ml-4 list-disc text-sm'>
                  <li>Консультації та проектування.</li>
                  <li>Постачання обладнання від провідних виробників. </li>
                  <li>
                    Монтаж, пусконалагоджувальні роботи та технічне
                    обслуговування.
                  </li>
                </ul>
              </li>
              <li>
                <p>Сертифікати та партнерство</p>
                <p className='mt-2 text-sm'>
                  <strong>ART-COMFORT</strong> має сертифікати від провідних
                  виробників, таких як{' '}
                  <strong>
                    Daikin, Mitsubishi Electric, Systemair, Carel,
                  </strong>{' '}
                  що підтверджують наш професіоналізм і можливість здійснювати
                  сервісне обслуговування їхнього обладнання.
                </p>
              </li>
              <li>
                <p>Довіра клієнтів</p>
                <p className='mt-2 text-sm'>
                  Серед наших клієнтів –{' '}
                  <strong>
                    ПАО "ФАРМАК", Київська міська державна адміністрація, ГП
                    "Укрспецекспорт"
                  </strong>
                  , а також ресторани, офіси й виробничі підприємства.
                </p>
              </li>
            </ol>
            <h4 className='mt-8 text-xl'>
              {aboutUsTranslations.licensesTitle}
            </h4>
            <div className='mt-2 flex flex-col justify-between gap-4 sm:flex-row'>
              {certificatesArray.map((certificate, index) => (
                <div
                  key={index}
                  className='flex flex-1 items-center justify-center rounded-2xl bg-slate-100'
                  onClick={() => {
                    setSelectedCertificate(certificate);
                  }}
                >
                  <Image
                    src={
                      Array.isArray(certificate.source)
                        ? certificate.source[0]
                        : certificate.source
                    }
                    alt='index'
                    height={200}
                    width={200}
                    className='pointer-events-none'
                  />
                </div>
              ))}
            </div>
            <hr className='my-4' />
            <h4>Наші послуги</h4>
            <ul className='ml-4 list-disc text-sm'>
              <li>
                <strong>
                  Обстеження систем вентиляції та кондиціонування:
                </strong>
                Точна діагностика для оцінки стану та ефективності систем.
              </li>
              <li>
                <strong>Проєктування HVAC-систем: </strong>Розробка
                індивідуальних проектів із використанням інструментів Revit та
                AutoCAD.
              </li>
              <li>
                <strong>Постачання обладнання:</strong> Поставка високоякісних
                кондиціонерів, вентиляторів, теплових насосів, чилерів та інших
                компонентів від провідних брендів.
              </li>
              <li>
                <strong>Монтаж і реконструкція:</strong> Встановлення та
                модернізація систем HVAC для різних типів об'єктів.
              </li>
              <li>
                <strong>Технічне обслуговування:</strong> Регулярний сервіс для
                забезпечення довготривалої та безаварійної роботи обладнання.
              </li>
              <li>
                <strong>Ремонт HVAC-систем:</strong> Швидке усунення
                несправностей із використанням оригінальних комплектуючих.
              </li>
            </ul>
            <hr className='my-4' />
            <h4>Наш колектив</h4>
            <p>
              Команда <strong>ART-COMFORT</strong> складається з 24
              професіоналів, які регулярно підвищують свою кваліфікацію. Наші
              спеціалісти мають досвід у реалізації проектів для офісів,
              торгових центрів, фармацевтичних об’єктів, адміністративних
              будівель та ресторанного бізнесу.
            </p>
            <hr className='my-4' />
            <h4>Наші референції</h4>
            <p>Ми пишаємося співпрацею з такими клієнтами:</p>
            <ul className='ml-4 list-disc text-sm'>
              <li>
                <strong>ПАО "ФАРМАК"</strong> – створення та обслуговування
                систем вентиляції для фармацевтичного виробництва.
              </li>
              <li>
                <strong>Київська міська державна адміністрація</strong> –
                автоматизація кліматичних систем.
              </li>
              <li>
                <strong>ГП "Укрспецекспорт"</strong> – вентиляція та охолодження
                для стратегічних об'єктів.
              </li>
              <li>
                <strong>Ресторан "Полісся"</strong> – забезпечення оптимального
                клімату для комфорту відвідувачів.
              </li>
            </ul>
            <hr className='my-4' />
            <p>Хочете дізнатися більше про нас або наші послуги?</p>
            <div className='mt-2 flex flex-row gap-2'>
              <Button size='small' label='Зв’яжіться з нами' />{' '}
              <p>
                – і ми допоможемо створити комфортний клімат у вашому просторі.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </Layout>
      <SelectedCertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
};

export default AboutPage;
