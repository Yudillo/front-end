import LogoImg from '@/components/auth/common/LogoImg';
import * as s from './SignupPage.css';
import Signup from '@/components/auth/signup/Signup';

export default function SignupPage() {
  return (
    <main className={s.signupContainer}>
      <LogoImg />
      <Signup />
    </main>
  );
}
