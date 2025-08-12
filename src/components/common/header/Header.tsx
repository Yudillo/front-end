import { header } from './Header.css';
import logo from '@/assets/yudilloLogo.svg';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className={header.headerContainer}>
      <div className={header.headerWrapper}>
        <Link to='/'>
          <img className={header.headerLogo} src={logo} alt='logo' />
        </Link>
        <div>
          <span className={header.headerTitle}>내 보드</span>
        </div>
        <div className={header.headerIconWrapper}>
          <Bars3Icon className={header.headerIcon} />
        </div>
      </div>
    </header>
  );
}
