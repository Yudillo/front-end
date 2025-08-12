import {
  PlusIcon,
  Squares2X2Icon,
  UserIcon,
} from '@heroicons/react/24/outline';
import * as s from './NavBar.css';

export default function NavBar() {
  return (
    <nav className={s.navBarContainer}>
      <div className={s.navBarWrapper}>
        <div>
          <Squares2X2Icon className={s.navBarIcon} />
        </div>
        <div>
          <PlusIcon className={s.navBarIcon} />
        </div>
        <div>
          <UserIcon className={s.navBarIcon} />
        </div>
      </div>
    </nav>
  );
}
