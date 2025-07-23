import * as s from './Header.css';
import logo from '@/assets/yudilloLogo.svg';
import { Bars3Icon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className={s.headerContainer}>
      <div className={s.headerWrapper}>
        <img className={s.headerLogo} src={logo} alt='logo' />
        <div>
          <span className={s.headerTitle}>내 보드</span>
        </div>
        <div className={s.headerIconWrapper}>
          <Bars3Icon className={s.headerIcon} />
        </div>
      </div>
    </header>
  );
}
