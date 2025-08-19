import LogoImg from '@/components/auth/common/LogoImg';
import Login from '@/components/auth/login/Login';
import { mainContainer } from '@/styles/global-styles.css';

export default function LoginPage() {
  return (
    <section className={mainContainer}>
      <LogoImg />
      <Login />
    </section>
  );
}
