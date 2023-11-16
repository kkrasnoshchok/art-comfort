import { motion } from 'framer-motion';

import { Link } from '@/components/header/components/Link';
import { Href } from '@/components/header/Header';

import { clsxm } from '@/utils';

type NavigationListProps = {
  nav: {
    links: {
      href: Href;
      title: string;
    }[];
    contacts: {
      href: Href;
      title: string;
    };
  };
  headerLinkClassName?: string;
  contactsClassName?: string;
  onLinkClick?: () => void;
  activeLink: Href;
};

export const NavigationList = (props: NavigationListProps) => {
  const {
    nav,
    contactsClassName,
    headerLinkClassName,
    onLinkClick,
    activeLink,
  } = props;

  return (
    <>
      {nav.links.map((link) => (
        <Link
          key={link.href}
          onClick={() => {
            onLinkClick && onLinkClick();
          }}
          className={clsxm([
            headerLinkClassName,
            //       borderColor: '#000000',
            // color: '#1e272e',
            'transition-all hover:scale-110 hover:border-stone-950 hover:text-stone-950',
            `#${activeLink}` === link.href &&
              'scale-110 border-stone-950 text-stone-950',
          ])}
          {...link}
        />
      ))}
      {/* Contacts Button */}
      <motion.a
        className={clsxm([
          'ml-8 rounded-full border-2 border-white bg-black px-6 py-3 text-white transition-all hover:border-black hover:bg-white hover:text-black',
          contactsClassName,
          `#${activeLink}` === '#contacts' &&
            'border-black bg-white text-black',
        ])}
        onClick={() => onLinkClick && onLinkClick()}
        href={nav.contacts.href}
      >
        {nav.contacts.title}
      </motion.a>
    </>
  );
};
