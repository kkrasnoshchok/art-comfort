import { Href } from '@/components/header/Header';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';

type TLink = {
  href: Href;
  title: string;
};

type NavigationListProps = {
  nav: {
    links: TLink[];
    contacts: TLink;
  };
  headerLinkClassName?: string;
  contactsClassName?: string;
  onLinkClick?: () => void;
};

export const NavigationList = (props: NavigationListProps) => {
  const { nav, contactsClassName, onLinkClick } = props;

  return (
    <>
      {nav.links.map((link) => (
        <Button
          href={link.href}
          key={link.href}
          onClick={() => {
            onLinkClick && onLinkClick();
          }}
          // theme={`#${activeLink}` === link.href ? 'primary' : 'secondary'}
          label={link.title}
          size='medium'
          className='header-link'
        />
      ))}
      {/* Contacts Button */}
      <Button
        href={nav.contacts.href}
        key={nav.contacts.href}
        onClick={() => {
          onLinkClick && onLinkClick();
        }}
        // theme={`#${activeLink}` === nav.contacts.href ? 'primary' : 'ghost'}
        size='medium'
        label={nav.contacts.title}
        className={clsxm(['header-link', contactsClassName])}
      />
    </>
  );
};
