import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import NextImage from '@/components/NextImage';

import { HoveredLink, Menu, MenuItem } from '@/ui/NavbarMenu';
import { cn } from '@/utils/cn';

import logo from '../../assets/logo.png';

export const Hrefs = {
  about: '/about',
  services: '#services',
  projects: '/projects',
  team: '#team',
  jobs: '#jobs',
  cerfitications: '/certifications',
  contacts: '#contacts',
  vacancies: '/vacancies',
  news: '/news',
} as const;

export type Href = (typeof Hrefs)[keyof typeof Hrefs];

/**
   * Structure:
   * - Call Button
   * - Burger Button for further menu
   * - Primary Links:
   *  - about: '/about',
      - services: '#services',
      - projects: '/projects',
      - contacts: '#contacts',
      - vacancies: '/vacancies',
      - news: '/news',
   * - Secondary Links:
   */

const locales = [
  {
    value: 'ua',
    label: 'Українська',
    emoji: '🇺🇦',
  },
  {
    value: 'en',
    label: 'English',
    emoji: '🇬🇧',
  },
  {
    value: 'de',
    label: 'Deutsch',
    emoji: '🇩🇪',
  },
  {
    value: 'pl',
    label: 'Polska',
    emoji: '🇵🇱',
  },
];

export const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [locale, updateLocale] = useLocalStorage('locale', {
    value: 'ua',
    label: 'Українська',
    emoji: '🇺🇦',
  });
  const [dropdownOpened, setDropdownOpened] = useState(false);
  return (
    <div className='fixed top-4 z-50 flex w-full items-center justify-center'>
      <motion.div
        initial={{
          opacity: 0,
          y: -200,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className='w-full max-w-7xl'
      >
        <Menu setActive={setActive} className={cn('flex items-center px-4')}>
          <Link className='flex-1 pr-24' href='/'>
            <div className='mb-3 flex items-center'>
              <NextImage src={logo} alt='logo' width={80} height={80} />
            </div>
          </Link>
          <MenuItem
            href='/about'
            setActive={setActive}
            active={active}
            item='About'
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>
                On this page you can read the history of the company,
                interesting facts and statistics. You can take a look at
                certficates and licenses as well in case you're interested in
                this
              </p>
              <HoveredLink href='/about#history'>
                History of the company
              </HoveredLink>
              <HoveredLink href='/about#certificates'>
                Licenses and Certificates
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            href='/services'
            setActive={setActive}
            active={active}
            item='Services'
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>
                On this page you can take a look at services we can offer you
              </p>
            </div>
          </MenuItem>
          <MenuItem
            href='/projects'
            setActive={setActive}
            active={active}
            item='Projects'
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>
                On this page you can take a look at project types we are
                proficient at and examples for each
              </p>
            </div>
          </MenuItem>
          <MenuItem
            href='#contacts'
            setActive={setActive}
            active={active}
            item='Contacts'
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>Here you can discover ways to contact us</p>
            </div>
          </MenuItem>
          <MenuItem
            href='/vacancies'
            setActive={setActive}
            active={active}
            item='Careers'
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>
                Here you can discover ways to begin or continue your
                professional path at Art-Comfort
              </p>
            </div>
          </MenuItem>
          <MenuItem
            href='/news'
            setActive={setActive}
            active={active}
            item='News'
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>
                Here you can discover latest news from HVAC industry
              </p>
            </div>
          </MenuItem>
          <div>
            <p
              className='relative rounded-md border px-2 py-1 text-2xl'
              onClick={() => setDropdownOpened((prev) => !prev)}
            >
              {locale.emoji}
            </p>
            {dropdownOpened && (
              <div className='absolute right-4 top-20 flex w-36 flex-col gap-1 rounded-lg bg-white text-sm'>
                {locales.map((localeItem, index) => (
                  <motion.p
                    whileHover={{
                      borderColor: 'rgba(0,0,0,1)',
                    }}
                    onClick={() => {
                      updateLocale(localeItem);
                      setDropdownOpened(false);
                    }}
                    key={localeItem.value}
                    className={cn(
                      'px-4 py-2',
                      'border border-transparent',
                      locale.value === localeItem.value && 'border-black',
                      index === 0 && 'rounded-t-lg',
                      index === locales.length - 1 && 'rounded-b-lg'
                    )}
                  >
                    {localeItem.emoji} {localeItem.label}
                  </motion.p>
                ))}
              </div>
            )}
          </div>
        </Menu>
      </motion.div>
    </div>
  );
};
