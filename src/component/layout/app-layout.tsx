import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface AppLayoutProps {
  children: ReactNode;
}

const App_layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default App_layout;
