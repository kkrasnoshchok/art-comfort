import { StaticImageData } from 'next/image';

import equipmentSale from '@/assets/Climate_Control_Equipment_Sale.png';
import airConditioningDesign from '@/assets/Design_Of_Air_Conditioning_and_Ventilation_Systems.jpg';
import selectionAndDelivery from '@/assets/Selection_And_Delivery.jpg';

export type Service = {
  id: string;
  title: string;
  description: string;
  url: StaticImageData;
};

export const services: Service[] = [
  {
    id: 'sale-of-climatic-equipment',
    title: 'Проєктування',
    description:
      'Кондиціонери, прецизійні кондиціонери, чиллери, вентиляція, теплові завіси, повітряні завіси, промислові зволожувачі, осушувачі та очищувачі повітря. Та ще пару речень опису послуги, як і для всіх інших',
    url: equipmentSale,
  },
  {
    id: 'design-of-air-conditioning-and-ventilation-systems',
    title: 'Постачання',
    description:
      'Правильно розроблений проект значно заощадить Ваш бюджет і продовжить термін експлуатації.',
    url: airConditioningDesign,
  },
  {
    id: 'selection-and-delivery-of-air-conditioners-and-climatic-equipment',
    title: 'Монтаж',
    description: 'Здійснюється професійно і абсолютно безкоштовно.',
    url: selectionAndDelivery,
  },
  {
    id: 'dismantling-works',
    title: 'Сервіс',
    description: 'Виконуємо якісно демонтажні роботи.',
    url: airConditioningDesign,
  },
  // {
  //   id: 'servicing-of-air-conditioning-and-ventilation-systems',
  //   title: 'Сервісне обслуговування систем кондиціонування і вентиляції',
  //   description:
  //     'Полягає в перевірці обладнання у всіх робочих режимах, контролі тиску, чищенні та змащенні деталей, теплообмінників і фільтрів.',
  //   url: selectionAndDelivery,
  // },
  // {
  //   id: 'consultations-of-experts',
  //   title: 'Консультації фахівців',
  //   description: 'з усіх питань, що цікавлять у виборі обладнання',
  //   url: airConditioningDesign,
  // },
  // {
  //   id: 'on-site-visit-of-specialist',
  //   title: "Виїзд фахівця на об'єкт",
  //   description:
  //     "Безпосередньо на об'єкті легше побачити і визначити, що потрібно саме Вам, обговорити варіанти монтажу. Виїзд фахівця на об'єкт безкоштовний.",
  //   url: selectionAndDelivery,
  // },
  // {
  //   id: 'installation-and-commissioning-works',
  //   title: 'Монтажні та пуско-налагоджувальні роботи',
  //   description:
  //     'Фахівці швидко і якісно виконують монтаж, використовуючи тільки професійний сертифікований інструмент.',
  //   url: airConditioningDesign,
  // },
  // {
  //   id: 'warranty-and-post-warranty-repair',
  //   title: 'Гарантійний і післягарантійний ремонт',
  //   description: 'Висока якість виконуваних робіт.',
  //   url: selectionAndDelivery,
  // },
];
