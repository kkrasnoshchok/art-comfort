import dayjs, { Dayjs } from 'dayjs';
import { StaticImageData } from 'next/image';

import hvacInnovationsURL from '@/assets/News_HVAC-Innovations.png';
import hvacSeasonalRecommendationsURL from '@/assets/News_Seasonal-Recommendations.png';
import { TranslationType } from '@/utils/locales';

type NewsType = {
  id: string;
  title: string;
  description: string;
  date: Dayjs;
  url: StaticImageData;
};

export const news = (t: TranslationType['news']): NewsType[] => [
  {
    id: 'hvac-innovations',
    title: t.newsHvacInnovationsTitle,
    description: t.newsHvacInnovationsContent,
    date: dayjs().subtract(2, 'weeks'),
    url: hvacInnovationsURL,
  },
  {
    id: 'hvac-seasonal-recommendations',
    title: t.newsSeasonalRecommendationsTitle,
    description: t.newsSeasonalRecommendationsContent,
    date: dayjs().subtract(4, 'weeks'),
    url: hvacSeasonalRecommendationsURL,
  },
];
