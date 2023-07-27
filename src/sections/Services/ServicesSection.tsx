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
    <section id='services' className='flex w-screen flex-col px-6 py-16 pt-24'>
      <h1>Послуги</h1>
      <div className='mt-4 flex flex-col gap-24'>
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className={clsxm([
              'flex w-full flex-1 flex-row p-4',
              index % 2 === 0 ? 'text-left' : 'flex-row-reverse text-right',
            ])}
          >
            <div
              className={clsxm('flex-1', [index % 2 === 0 ? 'pr-12' : 'pl-12'])}
            >
              <h2 className='text-xl font-bold'>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div
              className={clsxm(['mt-12 h-96  w-96 bg-slate-200 px-96'])}
            ></div>
          </div>
        ))}
      </div>
      <div className='mt-24 flex w-full items-center justify-center'>
        <button className='border px-16 py-4'>Discover more services</button>
      </div>
    </section>
  );
};
