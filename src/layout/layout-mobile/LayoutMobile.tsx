import Header from '@/components/common/header/Header';
import NavBar from '@/components/common/nav-bar/NavBar';
import { Outlet } from '@tanstack/react-router';
import { layoutMobile } from './LayoutMobile.css';

export default function LayoutMobile() {
  return (
    <div className={layoutMobile.container}>
      <Header />
      <main className={layoutMobile.mainWrapper}>
        <Outlet />
      </main>
      {/* <NavBar /> */}
    </div>
  );
}
