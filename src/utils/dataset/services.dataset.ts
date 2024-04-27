import { StaticImageData } from 'next/image';

// import equipmentSale from '@/assets/Climate_Control_Equipment_Sale.png';
import designingBackground from '@/assets/Sections_Designing.jpeg';
import installationBackground from '@/assets/Services_Installation.jpeg';
import maintenanceBackground from '@/assets/Services_Maintenance.jpg';
// import selectionAndDelivery from '@/assets/Selection_And_Delivery.jpg';
import supplyBackground from '@/assets/Services_Supply.jpeg';

export type Service = {
  id: string;
  title: string;
  description: string;
  url: StaticImageData;
};

export const services: Service[] = [
  {
    id: 'design',
    title: 'Проєктування',
    description:
      "Відкрийте для себе індивідуальні рішення HVAC за допомогою наших послуг з проектування. Наша команда експертів забезпечить оптимальну продуктивність і комфорт для вашого приміщення, використовуючи передові технології та найкращі галузеві практики. Зв'яжіться з нами, щоб обговорити ваш проект вже сьогодні!",
    url: designingBackground,
  },
  {
    id: 'supply',
    title: 'Постачання',
    description:
      "Насолоджуйтесь безперебійним постачанням систем опалення, вентиляції та кондиціонування з нашими послугами з постачання. Ми надаємо високоякісне обладнання та матеріали для забезпечення ефективності та довговічності вашої системи. Зв'яжіться з нами сьогодні, щоб розпочати роботу!",
    url: supplyBackground,
  },
  {
    id: 'installation',
    title: 'Монтаж',
    description:
      "Отримайте професійний монтаж систем опалення, вентиляції та кондиціонування за допомогою наших монтажних послуг. Наші досвідчені фахівці забезпечать точний та ефективний монтаж, щоб ви могли насолоджуватися надійним комфортом у вашому приміщенні. Зв'яжіться з нами, щоб запланувати встановлення вже сьогодні!",
    url: installationBackground,
  },
  {
    id: 'maintenance',
    title: 'Сервіс',
    description:
      "Забезпечте безперебійну роботу вашої системи опалення, вентиляції та кондиціонування за допомогою наших послуг з технічного обслуговування та підтримки. Наша команда пропонує регулярне технічне обслуговування та надійну підтримку, щоб забезпечити ефективну роботу вашої системи цілий рік. Зв'яжіться з нами, щоб дізнатися більше про наші плани технічного обслуговування!",
    url: maintenanceBackground,
  },
];

const engLocales = {
  ['design']:
    'Discover tailored HVAC solutions with our Designing Services. Our expert team ensures optimal performance and comfort for your space, using cutting-edge technology and industry best practices. Get in touch to discuss your project today!',
  ['supply']:
    'Experience seamless HVAC supply with our Supply Services. We provide top-quality equipment and materials to ensure the efficiency and longevity of your system. Contact us today to get started!',
  ['installation']:
    'Get professional HVAC installation with our Installation Services. Our expert technicians ensure precise and efficient installation, so you can enjoy reliable comfort in your space. Contact us to schedule your installation today!',
  ['maintenance']:
    'Keep your HVAC system running smoothly with our Maintenance & Support Services. Our team offers regular maintenance and reliable support to ensure your system operates efficiently year-round. Contact us to learn more about our maintenance plans!',
};
