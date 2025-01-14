import { Suspense } from 'react';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 1) 20%, rgba(105, 105, 105, 1) 75%)',
      }}
    >
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
