import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='services' className='flex w-screen flex-col px-6 py-16 pt-24'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        Послуги
      </motion.h1>
      <motion.div
        ref={ref}
        className='mt-4 flex flex-col gap-24'
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        {services.slice(0, 3).map((service, index) => (
          <motion.div
            key={index}
            className={clsxm([
              'flex w-full flex-1 flex-row p-4',
              index % 2 === 0 ? 'text-left' : 'flex-row-reverse text-right',
            ])}
            initial={{ opacity: 0, x: index % 2 === 0 ? 200 : -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.5,
              ease: 'easeOut',
            }}
          >
            <div
              className={clsxm('flex-1', [index % 2 === 0 ? 'pr-12' : 'pl-12'])}
            >
              <motion.h2 className='text-xl font-bold'>
                {service.title}
              </motion.h2>
              <motion.p>{service.description}</motion.p>
            </div>
            <motion.div
              className={clsxm(['mt-12 h-96  w-96 bg-slate-200 px-96'])}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className='mt-24 flex w-full items-center justify-center'
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <button className='border px-16 py-4'>Discover more services</button>
      </motion.div>
    </section>
  );
};
