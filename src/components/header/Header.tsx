import { Select } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import { NavigationList } from '@/components/header/components/NavigationList/NavigationList';
import NextImage from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { UsaIcon } from '@/assets/svgs/UsaIcon';
import { Button } from '@/ui/Button';
import { clsxm, useI18n } from '@/utils';

export const Hrefs = {
  about: '#about',
  services: '#services',
  projects: '#projects',
  team: '#team',
  jobs: '#jobs',
  cerfitications: '#certifications',
  contacts: '#contacts',
  vacancies: '/vacancies',
  news: '#news',
} as const;

export type Href = (typeof Hrefs)[keyof typeof Hrefs];

export const Header = () => {
  const [activeLink, setActiveLink] = useState<Href>('#about');
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
    ],
    [t]
  );
  const advancedLinks = useMemo(
    () => [
      ...baseLinks,
      { href: Hrefs.news, title: t.header.newsLabel },
      { href: Hrefs.vacancies, title: t.header.vacanciesLabel },
    ],
    [baseLinks, t]
  );
  const contacts = { href: Hrefs.contacts, title: t.header.contactsLabel };

  useEffect(() => {
    // Intersection Observer configuration
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% of the section needs to be visible
    };

    // Callback function when the section is intersecting
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id as Href);
        }
      });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe each section
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ translateY: -20 }}
        animate={{ translateY: 0 }}
        exit={{ opacity: 0 }}
        className='fixed top-8 z-50 flex h-24 w-full items-center justify-center bg-opacity-25'
      >
        <motion.div className='bg-primary-bgStrong relative flex w-11/12 items-center justify-between rounded-2xl p-6 backdrop-blur-3xl'>
          {/* Logo */}
          <div className={clsxm(['flex', menuOpened && ''])}>
            <Link href='/'>
              <div className='mb-3 flex items-center'>
                <NextImage
                  src={logo}
                  alt='logo'
                  width={120}
                  height={120}
                  className='absolute'
                />
              </div>
            </Link>
          </div>
          <div className={clsxm(['flex items-center gap-4'])}>
            {/* Nav */}
            <nav className='hidden items-center gap-8 xl:flex'>
              <NavigationList
                nav={{
                  links: baseLinks,
                  contacts,
                }}
                activeLink={activeLink}
              />
            </nav>
            {/* Language Select */}
            <Select
              size='large'
              className='w-16'
              defaultValue={router.locale}
              suffixIcon={null}
              listItemHeight={28}
              bordered
              options={[
                {
                  label: (
                    <div className='flex h-full w-full flex-col items-center justify-center'>
                      <div className='h-3 w-8 bg-blue-600' />
                      <div className='h-3 w-8 bg-yellow-300' />
                    </div>
                  ),
                  value: 'ua',
                },
                {
                  label: (
                    <div className='flex h-full w-full flex-col items-center justify-center'>
                      <UsaIcon size={32} />
                    </div>
                  ),

                  value: 'en',
                },
              ]}
              onChange={(value) => onLocaleChange(value as 'ua' | 'en')}
            />
            {/* Burger Button */}
            <Button
              onClick={() => setMenuOpened((prev) => !prev)}
              theme='ghost'
              className={clsxm(
                'border-primary-default hover:border-primary-bgStrong group flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border-2 transition-all',
                menuOpened && 'bg-primary-default'
              )}
              Icon={
                <>
                  <div
                    className={clsxm([
                      'bg-primary-default group-hover:bg-primary-bgStrong h-0.5 w-5 rounded-xl transition-all',
                      menuOpened &&
                        't-2/4 l-2/4 bg-primary-bg group-hover:bg-primary-bg absolute rotate-45',
                    ])}
                  />
                  <div
                    className={clsxm([
                      'bg-primary-default group-hover:bg-primary-bgStrong h-0.5 w-5 rounded-xl transition-all',
                      menuOpened && 'hidden',
                    ])}
                  />
                  <div
                    className={clsxm([
                      'bg-primary-default group-hover:bg-primary-bgStrong h-0.5 w-5 rounded-xl transition-all',
                      menuOpened &&
                        't-2/4 l-2/4 bg-primary-bg group-hover:bg-primary-bg absolute -rotate-45',
                    ])}
                  />
                </>
              }
            />
          </div>
          {menuOpened && (
            <motion.nav
              animate={{ translateX: menuOpened ? 0 : 120 }}
              className='bg-primary-bg absolute right-0 top-28 z-50 flex w-full flex-col items-center justify-start gap-8 rounded-lg p-2 pt-6 sm:w-72 sm:items-end'
            >
              <NavigationList
                nav={{ links: advancedLinks, contacts }}
                contactsClassName='mt-auto w-2/3 ml-0 sm:w-full justify-center items-center text-center'
                headerLinkClassName='text-xl'
                onLinkClick={() => setMenuOpened(false)}
                activeLink={activeLink}
              />
            </motion.nav>
          )}
        </motion.div>
      </motion.header>
    </AnimatePresence>
  );
};
