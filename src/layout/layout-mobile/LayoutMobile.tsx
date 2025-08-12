import Header from '@/components/common/header/Header';
import NavBar from '@/components/common/nav-bar/NavBar';
import { Outlet, useLocation } from '@tanstack/react-router';
import { layoutMobile } from './LayoutMobile.css';

export default function LayoutMobile() {
  const { pathname } = useLocation();
  const isAuth = pathname.includes('auth');

  return (
    <div className={layoutMobile.container}>
      <Header />
      <main className={layoutMobile.mainWrapper}>
        <Outlet />
      </main>
      {!isAuth && <NavBar />}
    </div>
  );
}
