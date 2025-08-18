import LogoImg from '@/components/auth/common/LogoImg';
import Signup from '@/components/auth/signup/Signup';
import { mainContainer } from '@/styles/global-styles.css';

export default function SignupPage() {
  return (
    <section className={mainContainer}>
      <LogoImg />
      <Signup />
    </section>
  );
}
