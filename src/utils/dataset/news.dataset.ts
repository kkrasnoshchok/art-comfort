import dayjs, { Dayjs } from 'dayjs';

type TNews = {
  id: string;
  title: string;
  description: string;
  date: Dayjs;
};

export const news: TNews[] = [
  {
    id: 'AB12',
    title: 'Stay Cool This Summer with Our Energy-Efficient AC Units',
    description:
      "Discover the latest in energy-efficient air conditioning technology. Our cutting-edge AC units will keep your home cool and comfortable while saving you money on your energy bills. Don't break a sweat this summer – choose the best cooling solution!",
    date: dayjs('2023-05-15'),
  },
  {
    id: 'CDEF',
    title: 'Winter is Coming: Prepare Your HVAC System for the Cold Season',
    description:
      "As the temperatures drop, it's essential to ensure your heating system is in top shape. Learn about our winter HVAC maintenance services, and get your system ready for the frosty days ahead. Stay warm and cozy all winter long!",
    date: dayjs('2023-10-01'),
  },
  {
    id: 'GHIJ',
    title: 'Indoor Air Quality Matters – Tips for a Healthier Home',
    description:
      "Your home's indoor air quality plays a crucial role in your family's health. Discover our top tips for improving indoor air quality, from regular filter changes to advanced air purification solutions. Breathe easier and live better!",
    date: dayjs('2023-02-20'),
  },
  {
    id: 'KLMN',
    title: 'Announcing Our New HVAC Repair Service: Fast and Reliable Fixes',
    description:
      "In case your HVAC system needs urgent attention, we've launched a new repair service. Our expert technicians are ready to diagnose and fix any issues, ensuring your home remains comfortable all year round. Trust the experts for quick and reliable solutions!",
    date: dayjs('2023-07-12'),
  },
];
