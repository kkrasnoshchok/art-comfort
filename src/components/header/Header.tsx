import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { FaPhone } from 'react-icons/fa';

import { NavigationList } from '@/components/header/components/NavigationList/NavigationList';
import NextImage from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { Button } from '@/ui/Button';
import { clsxm, useI18n } from '@/utils';

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

export const Header = () => {
  const router = useRouter();
  const [menuOpened, setMenuOpened] = useState(false);

  const onLocaleChange = (locale: 'ua' | 'en') => {
    router.push(router.pathname, router.asPath, { locale });
  };
  const { t } = useI18n();

  const baseLinks = useMemo(
    () => [
      { href: Hrefs.about, title: t.header.aboutLabel },
      { href: Hrefs.services, title: t.header.servicesLabel },
      { href: Hrefs.projects, title: t.header.projectsLabel },
      { href: Hrefs.team, title: t.header.teamLabel },
      { href: Hrefs.vacancies, title: t.header.vacanciesLabel },
    ],
    [t]
  );
  const advancedLinks = useMemo(
    () => [
      ...baseLinks,
      { href: Hrefs.news, title: t.header.newsLabel },
      { href: Hrefs.cerfitications, title: t.header.certificationsLabel },
    ],
    [baseLinks, t]
  );
  const contacts = { href: Hrefs.contacts, title: t.header.contactsLabel };

  return (
    <>
      {/* Call Button */}
      <Button
        className={clsxm(
          'header-call-button',
          'fixed bottom-4 right-8 z-[51]',
          'flex items-center',
          'bg-success-bgStrong border-success-defaultStrong  rounded-full border p-3 shadow-xl hover:scale-95'
        )}
        Icon={<FaPhone size={16} className='text-success-defaultStrong' />}
        theme='secondary'
        href='tel:+436609411059'
      />
      {/* Burger Button */}
      <Button
        onClick={() => setMenuOpened((prev) => !prev)}
        theme='ghost'
        className={clsxm(
          'header-burger-menu group rounded-full transition-all',
          'fixed bottom-4 left-8 z-[51] p-3',
          'flex flex-col items-center justify-center',
          'border-primary-defaultStrong border',
          'bg-primary-bg',
          menuOpened && 'bg-secondary-bgStrong border-secondary-defaultStrong'
        )}
        Icon={
          <div className='flex h-4 w-4 flex-col justify-center gap-1'>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={clsxm([
                    'bg-primary-defaultStrong h-0.5 w-4 rounded-xl transition-all',
                    menuOpened &&
                      index !== 1 &&
                      't-2/4 l-2/4 bg-secondary-defaultStrong absolute rotate-45',
                    menuOpened && index === 1 && 'hidden',
                    menuOpened && index === 2 && '-rotate-45',
                  ])}
                />
              ))}
          </div>
        }
      />
      <motion.nav
        className={clsxm(
          'fixed bottom-20 left-4 z-[51]',
          'flex w-full flex-col items-start justify-start sm:w-72',
          'gap-4 rounded-[36px] p-6',
          'bg-primary-bg border-primary-defaultWeak border',
          menuOpened
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
          'transition-opacity'
        )}
      >
        <NavigationList
          nav={{ links: advancedLinks, contacts }}
          contactsClassName='w-2/3 ml-0 sm:w-full justify-center items-center text-center'
          headerLinkClassName='text-xl'
          onLinkClick={() => setMenuOpened(false)}
        />
      </motion.nav>
      <header className='fixed left-1/2 top-4 z-50 flex -translate-x-1/2'>
        <div
          className={clsxm([
            'header-logo flex cursor-pointer transition-transform hover:scale-105',
          ])}
        >
          <Link href='/'>
            <div className='mb-3 flex items-center'>
              <NextImage src={logo} alt='logo' width={80} height={80} />
            </div>
          </Link>
        </div>
      </header>

      <motion.header
        initial={{ translateY: 120, opacity: 0 }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: { delay: 1, duration: 0.8, type: 'spring' },
        }}
        exit={{ opacity: 0 }}
        className='fixed bottom-2 z-50 flex w-full items-center justify-center'
      >
        <motion.div className='elative border-primary-defaultWeak bg-primary-bg flex items-center justify-center rounded-3xl border p-2'>
          <div className={clsxm(['flex items-center gap-4'])}>
            {/* Nav */}
            <nav className='hidden items-center gap-8 xl:flex'>
              <NavigationList
                nav={{
                  links: baseLinks,
                  contacts,
                }}
              />
            </nav>
            {/* Language Select */}
            <div className='flex flex-row items-center'>
              <Button
                labelClassName={clsxm(
                  'text-sm text-primary-defaultWeak',
                  router.locale === 'ua' && 'text-primary-defaultStrong'
                )}
                className='header-language-select p-1'
                label='UA'
                theme={router.locale === 'ua' ? 'secondary' : 'ghost'}
                onClick={() => {
                  if (router.locale === 'en') {
                    onLocaleChange('ua');
                  }
                }}
              />
              <div className='text-grayscale-headerWeak mx-1 text-sm'>/</div>
              <Button
                labelClassName={clsxm(
                  'text-sm text-primary-defaultWeak',
                  router.locale === 'en' && 'text-primary-defaultStrong'
                )}
                className='header-language-select p-1'
                label='EN'
                theme={router.locale === 'en' ? 'secondary' : 'ghost'}
                onClick={() => {
                  if (router.locale === 'ua') {
                    onLocaleChange('en');
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};
