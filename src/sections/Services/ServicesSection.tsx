import { motion } from 'framer-motion';

import { clsxm } from '@/utils';

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: 'Продаж кліматичного обладнання',
    description:
      'Кондиціонери, прецизійні кондиціонери, чиллери, вентиляція, теплові завіси, повітряні завіси, промислові зволожувачі, осушувачі та очищувачі повітря',
  },
  {
    title: 'Проектування систем кондиціонування та вентиляції',
    description:
      'Правильно розроблений проект значно заощадить Ваш бюджет і продовжить термін експлуатації.',
  },
  {
    title: 'Підбір і доставка кондиціонерів і кліматичного обладнання',
    description: 'Здійснюється професійно і абсолютно безкоштовно.',
  },
  {
    title: 'Демонтажні роботи',
    description: 'Виконуємо якісно демонтажні роботи.',
  },
  {
    title: 'Сервісне обслуговування систем кондиціонування і вентиляції',
    description:
      'Полягає в перевірці обладнання у всіх робочих режимах, контролі тиску, чищенні та змащенні деталей, теплообмінників і фільтрів.',
  },
  {
    title: 'Консультації фахівців',
    description: 'з усіх питань, що цікавлять у виборі обладнання',
  },
  {
    title: "Виїзд фахівця на об'єкт",
    description:
      "Безпосередньо на об'єкті легше побачити і визначити, що потрібно саме Вам, обговорити варіанти монтажу. Виїзд фахівця на об'єкт безкоштовний.",
  },
  {
    title: 'Монтажні та пуско-налагоджувальні роботи',
    description:
      'Фахівці швидко і якісно виконують монтаж, використовуючи тільки професійний сертифікований інструмент.',
  },
  {
    title: 'Гарантійний і післягарантійний ремонт',
    description: 'Висока якість виконуваних робіт.',
  },
];

export const ServicesSection = () => {
  return (
    <section
      id='services'
      className={clsxm(['flex w-screen flex-col px-6 py-24'])}
    >
      <motion.h1 className='md:text-2xl'>Послуги</motion.h1>
      <motion.div className={clsxm(['mt-4 flex flex-col gap-8 lg:gap-24'])}>
        {services.slice(0, 3).map((service, index) => {
          return (
            <motion.div
              key={index}
              className={clsxm([
                'flex w-full flex-1 flex-col justify-center',
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
              ])}
            >
              <div
                className={clsxm([
                  'flex-1',
                  index % 2 === 0
                    ? 'text-left lg:pr-12'
                    : 'text-right lg:pl-12',
                ])}
              >
                <motion.h2 className='text-lg font-bold'>
                  {service.title}
                </motion.h2>
                <motion.p className='mt-2'>{service.description}</motion.p>
              </div>
              <div
                className={clsxm([
                  'mt-4 aspect-video w-full border border-slate-300 bg-slate-100 md:aspect-auto md:h-48 lg:mt-0 lg:h-96 lg:flex-1 portrait:h-48',
                ])}
              />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        className={clsxm(['mt-8 flex w-full items-center justify-center'])}
      >
        <button className='border px-16 py-4'>Discover more services</button>
      </motion.div>
    </section>
  );
};
