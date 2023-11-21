import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import { NavigationList } from '@/components/header/components/NavigationList/NavigationList';

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
    <motion.header
      initial={{ translateY: -20 }}
      animate={{ translateY: 0 }}
      exit={{ opacity: 0 }}
      className='fixed bottom-4 z-50 flex w-full items-center justify-center'
    >
      <motion.div className='bg-primary-bgStrong relative flex items-center justify-center rounded-2xl px-4 py-2 backdrop-blur-3xl'>
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
          <div className='flex flex-row items-center'>
            <Button
              labelClassName={clsxm(
                'text-sm text-primary-bg',
                router.locale === 'ua' && 'text-grayscale-header'
              )}
              label='UA'
              theme='ghost'
              onClick={() => {
                if (router.locale === 'en') {
                  onLocaleChange('ua');
                }
              }}
            />
            <div className='text-grayscale-headerWeak mx-1 text-sm'>/</div>
            <Button
              labelClassName={clsxm(
                'text-sm text-primary-bg',
                router.locale === 'en' && 'text-grayscale-header'
              )}
              label='EN'
              theme='ghost'
              onClick={() => {
                if (router.locale === 'ua') {
                  onLocaleChange('en');
                }
              }}
            />
          </div>
          {/* Burger Button */}
          <Button
            onClick={() => setMenuOpened((prev) => !prev)}
            theme='ghost'
            className={clsxm(
              'border-primary-bg hover:border-primary-bgStrong group flex h-7 w-7 flex-col items-center justify-center gap-0.5 rounded-full border-2 transition-all',
              menuOpened && 'bg-primary-default'
            )}
            Icon={
              <>
                <div
                  className={clsxm([
                    'bg-primary-bg group-hover:bg-primary-bgStrong h-0.5 w-3 rounded-xl transition-all',
                    menuOpened &&
                      't-2/4 l-2/4 bg-primary-bg group-hover:bg-primary-bg absolute rotate-45',
                  ])}
                />
                <div
                  className={clsxm([
                    'bg-primary-bg group-hover:bg-primary-bgStrong h-0.5 w-3 rounded-xl transition-all',
                    menuOpened && 'hidden',
                  ])}
                />
                <div
                  className={clsxm([
                    'bg-primary-bg group-hover:bg-primary-bgStrong h-0.5 w-3 rounded-xl transition-all',
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
            className='bg-primary-defaultWeak absolute bottom-16 right-0 z-50 flex w-full flex-col items-center justify-start gap-4 rounded-lg p-6 sm:w-72 sm:items-end'
          >
            <NavigationList
              nav={{ links: advancedLinks, contacts }}
              contactsClassName='mt-4 w-2/3 ml-0 sm:w-full justify-center items-center text-center'
              headerLinkClassName='text-xl'
              onLinkClick={() => setMenuOpened(false)}
              activeLink={activeLink}
            />
          </motion.nav>
        )}
      </motion.div>
    </motion.header>
  );
};
