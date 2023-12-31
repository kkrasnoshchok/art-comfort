import { motion, useAnimationControls, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useMemo, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { SectionWrapper } from '@/components/sectionWrapper';

import equipmentSale from '@/assets/Climate_Control_Equipment_Sale.png';
import airConditioningDesign from '@/assets/Design_Of_Air_Conditioning_and_Ventilation_Systems.jpg';
import selectionAndDelivery from '@/assets/Selection_And_Delivery.jpg';
import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';

type Service = {
  title: string;
  description: string;
  url: StaticImageData;
};

const services: Service[] = [
  {
    title: 'Продаж кліматичного обладнання',
    description:
      'Кондиціонери, прецизійні кондиціонери, чиллери, вентиляція, теплові завіси, повітряні завіси, промислові зволожувачі, осушувачі та очищувачі повітря. Та ще пару речень опису послуги, як і для всіх інших',
    url: equipmentSale,
  },
  {
    title: 'Проектування систем кондиціонування та вентиляції',
    description:
      'Правильно розроблений проект значно заощадить Ваш бюджет і продовжить термін експлуатації.',
    url: airConditioningDesign,
  },
  {
    title: 'Підбір і доставка кондиціонерів і кліматичного обладнання',
    description: 'Здійснюється професійно і абсолютно безкоштовно.',
    url: selectionAndDelivery,
  },
  {
    title: 'Демонтажні роботи',
    description: 'Виконуємо якісно демонтажні роботи.',
    url: airConditioningDesign,
  },
  {
    title: 'Сервісне обслуговування систем кондиціонування і вентиляції',
    description:
      'Полягає в перевірці обладнання у всіх робочих режимах, контролі тиску, чищенні та змащенні деталей, теплообмінників і фільтрів.',
    url: selectionAndDelivery,
  },
  {
    title: 'Консультації фахівців',
    description: 'з усіх питань, що цікавлять у виборі обладнання',
    url: airConditioningDesign,
  },
  {
    title: "Виїзд фахівця на об'єкт",
    description:
      "Безпосередньо на об'єкті легше побачити і визначити, що потрібно саме Вам, обговорити варіанти монтажу. Виїзд фахівця на об'єкт безкоштовний.",
    url: selectionAndDelivery,
  },
  {
    title: 'Монтажні та пуско-налагоджувальні роботи',
    description:
      'Фахівці швидко і якісно виконують монтаж, використовуючи тільки професійний сертифікований інструмент.',
    url: airConditioningDesign,
  },
  {
    title: 'Гарантійний і післягарантійний ремонт',
    description: 'Висока якість виконуваних робіт.',
    url: selectionAndDelivery,
  },
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const controls = useAnimationControls();

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  const contentVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
      },
    }),
    []
  );

  return (
    <SectionWrapper sectionProps={{ id: 'services' }} className='pb-0'>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className={clsxm(
          'grid w-11/12 grid-cols-2 overflow-hidden',
          'border-primary-bg rounded-[36px] border-2 bg-gray-50 bg-opacity-25 shadow-xl backdrop-blur-2xl'
        )}
      >
        {/* Left */}
        <motion.div className='p-8'>
          <motion.h1 className='h1 text-primary-default'>Послуги</motion.h1>
          <motion.div className='mt-4 flex flex-col'>
            {services.slice(0, 5).map((service, index) => {
              const isActive = activeService.title === service.title;
              return (
                <motion.div
                  variants={itemVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.5, once: true }}
                  transition={{ delay: 100 * index }}
                  key={service.title}
                  className='services-card pt-4'
                >
                  <div
                    className={clsxm(
                      'flex cursor-pointer flex-row items-center justify-between',
                      'border-primary-default rounded-2xl border-2 p-4 transition duration-500',
                      'hover:shadow-primary-default hover:scale-[1.01] hover:shadow-sm',
                      'active:scale-[0.99]',
                      isActive &&
                        'bg-primary-default border-primary-bg services-card--active'
                    )}
                    onClick={() => {
                      controls.start('hidden');
                      setTimeout(() => {
                        setActiveService(service);
                        controls.start('visible');
                      }, 300);
                    }}
                  >
                    <p
                      className={clsxm(
                        'p text-primary-defaultStrong transition-colors',
                        isActive && 'text-primary-bg'
                      )}
                    >
                      {service.title}
                    </p>
                    <Button
                      Icon={
                        <FaArrowRight
                          color={
                            isActive
                              ? 'rgba(36, 84, 116, 1)' // primary-default
                              : 'rgba(235, 237, 241, 1)' // primary-bg
                          }
                          size={16}
                        />
                      }
                      size='small'
                      className={clsxm(
                        'rounded-full px-2 py-2',
                        isActive && 'bg-primary-bg hover:bg-primary-bg'
                      )}
                      onClick={() => {
                        setActiveService(service);
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        {/* Right */}
        <motion.div className='bg-primary-defaultStrong relative z-10 flex flex-1 flex-col justify-between rounded-[36px] p-8'>
          <motion.div
            className='flex h-full flex-col justify-between'
            variants={contentVariants}
            initial='visible'
            animate={controls}
          >
            <motion.h2 className='h2 text-primary-bg'>
              {activeService.title}
            </motion.h2>
            <p className='text-primary-bg self-end justify-self-end'>
              {activeService.description}
            </p>
            <motion.div className='absolute left-0 top-0 -z-10 h-full w-full'>
              <Image
                src={activeService.url}
                className='h-full w-full rounded-[36px] object-cover opacity-10'
                alt={activeService.description}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
