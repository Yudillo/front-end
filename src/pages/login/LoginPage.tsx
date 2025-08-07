import LogoImg from '@/components/auth/common/LogoImg';
import Login from '@/components/auth/login/Login';
import * as s from './LoginPage.css';

export default function LoginPage() {
  return (
    <main className={s.loginContainer}>
      <LogoImg />
      <Login />
    </main>
  );
}
