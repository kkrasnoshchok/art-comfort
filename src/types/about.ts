import { StaticImageData } from 'next/image';

export type CertificateType = {
  title: string;
  source: StaticImageData | StaticImageData[];
};
