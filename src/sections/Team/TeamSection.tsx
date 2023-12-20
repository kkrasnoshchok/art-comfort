import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { SectionWrapper } from '@/components/sectionWrapper';

import team0 from '@/assets/Team_0.jpeg';
import team1 from '@/assets/Team_1.jpeg';
import team2 from '@/assets/Team_2.jpeg';
import team3 from '@/assets/Team_3.jpeg';
import team4 from '@/assets/Team_4.jpeg';
import team5 from '@/assets/Team_5.jpeg';
import team6 from '@/assets/Team_6.jpeg';
import team7 from '@/assets/Team_7.jpeg';
import team8 from '@/assets/Team_8.jpeg';
import team9 from '@/assets/Team_9.jpeg';
import { Button } from '@/ui/Button';
import { Modal } from '@/ui/Modal';
import { clsxm, useBreakpoint } from '@/utils';

const teamMock = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
    url: team0,
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
    url: team1,
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
    url: team2,
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
    url: team3,
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
    url: team4,
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
    url: team5,
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
    url: team6,
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
    url: team7,
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
    url: team8,
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
    url: team9,
  },
];

export const TeamSection = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const { is2xl } = useBreakpoint('2xl');
  const { isMd } = useBreakpoint('md');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<any>(null); // Change 'any' to the actual type of your user object

  const getSlidesPerView = () => {
    if (is2xl) {
      return 4;
    }
    if (isMd) {
      return 3;
    }
    return 2;
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  return (
    <SectionWrapper sectionProps={{ id: 'team' }} className='pb-0'>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true }}
        className={clsxm(
          'flex w-11/12 flex-col p-8'
          // 'rounded-[36px] border-2 bg-gray-50 bg-opacity-25 shadow-lg backdrop-blur-lg'
        )}
      >
        <h1 className='h1 text-primary-defaultStrong'>Наша команда</h1>
        <div className='mt-8 flex h-full w-full flex-col gap-12 lg:flex-row'>
          <Swiper
            ref={swiperRef}
            grabCursor
            loop
            autoplay
            slidesPerView={getSlidesPerView()}
            spaceBetween={24}
            modules={[Pagination, Navigation, Autoplay, A11y]}
            className='h-full w-full'
          >
            {teamMock.map((user, index) => (
              <SwiperSlide key={index}>
                <div
                  className={clsxm(
                    'team-element group relative',
                    'flex h-full w-full flex-col items-center justify-center',
                    'transition-all hover:scale-[0.98] active:scale-[0.95]'
                  )}
                  onClick={() => {
                    setModalOpen(true);
                    setSelectedUser(user);
                  }}
                >
                  <div
                    className={clsxm([
                      'bg-primary-defaultStrong aspect-square w-full rounded-2xl',
                    ])}
                  >
                    <Image
                      src={user.url}
                      alt='alt'
                      className='aspect-square h-full w-full rounded-xl opacity-60 transition-opacity group-hover:opacity-10'
                    />
                  </div>
                  <div
                    className={clsxm(
                      'absolute bottom-4 w-11/12',
                      'pointer-events-none opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100',
                      'bg-primary-bg rounded-lg p-2'
                    )}
                  >
                    <div className='flex flex-row items-center'>
                      <h4 className='text-primary-defaultStrong h4'>
                        {user.name}
                      </h4>
                      <p className='p ml-2'> / CEO</p>
                    </div>
                    <div className='flex flex-row items-center'>
                      <Button
                        theme='ghost'
                        href={`tel:${user.phone}`}
                        className='text-primary-defaultStrong h4'
                        label={user.phone}
                      />
                    </div>
                    <div className='flex flex-row items-center'>
                      <Button
                        theme='ghost'
                        href={`mailto:${user.email}`}
                        className='text-primary-defaultStrong h4'
                        label={user.email}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setSelectedUser(null);
          setModalOpen(false);
        }}
      >
        {selectedUser && (
          <>
            <div className='bg-primary-defaultStrong mb-4 aspect-square w-full rounded-2xl'>
              <Image
                src={selectedUser.url}
                alt='alt'
                className='aspect-square h-full w-full rounded-xl opacity-60 transition-opacity group-hover:opacity-10'
              />
            </div>
            <div className='flex flex-row items-center'>
              <h4 className='text-primary-defaultStrong h4'>
                {selectedUser.name}
              </h4>
              <p className='p ml-2'> / CEO</p>
            </div>
            <div className='flex flex-row items-center'>
              <Button
                theme='ghost'
                href={`tel:${selectedUser.phone}`}
                className='text-primary-defaultStrong h4'
                label={selectedUser.phone}
              />
            </div>
            <div className='flex flex-row items-center'>
              <Button
                theme='ghost'
                href={`mailto:${selectedUser.email}`}
                className='text-primary-defaultStrong h4'
                label={selectedUser.email}
              />
            </div>
            <div className='mt-8 flex w-full flex-row justify-start'>
              <div className='flex flex-row items-center'>
                <Button
                  theme='primary'
                  href={`tel:${selectedUser.phone}`}
                  className='text-primary-defaultStrong h4'
                  label='Подзвонити'
                />
              </div>
              <div className='ml-4 flex flex-row items-center'>
                <Button
                  theme='secondary'
                  href={`mailto:${selectedUser.email}`}
                  className='text-primary-defaultStrong h4'
                  label='Написати лист'
                />
              </div>
            </div>
          </>
        )}
      </Modal>
    </SectionWrapper>
  );
};
