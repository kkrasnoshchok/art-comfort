import { ReactNode } from 'react';

import { Header } from '@/components/header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
