import Header from '@/components/common/header/Header';
import NavBar from '@/components/common/nav-bar/NavBar';
import { Outlet } from '@tanstack/react-router';
import * as s from './LayoutMobile.css';

export default function LayoutMobile() {
  return (
    <>
      <Header />
      <main className={s.contentsContainer}>
        <Outlet />
      </main>
      {/* <NavBar /> */}
    </>
  );
}
