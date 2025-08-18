import LogoImg from '@/components/auth/common/LogoImg';
import VerifyEmail from '@/components/auth/verify-email/VerifyEmail';
import { mainContainer } from '@/styles/global-styles.css';

export default function VerifyEmailPage() {
  return (
    <section className={mainContainer}>
      <LogoImg />
      <VerifyEmail />
    </section>
  );
}
