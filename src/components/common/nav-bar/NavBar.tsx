import {
  PlusIcon,
  Squares2X2Icon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { navBar } from './NavBar.css';

export default function NavBar() {
  return (
    <nav className={navBar.navBarContainer}>
      <div className={navBar.navBarWrapper}>
        <div>
          <Squares2X2Icon className={navBar.navBarIcon} />
        </div>
        <div>
          <PlusIcon className={navBar.navBarIcon} />
        </div>
        <div>
          <UserIcon className={navBar.navBarIcon} />
        </div>
      </div>
    </nav>
  );
}
