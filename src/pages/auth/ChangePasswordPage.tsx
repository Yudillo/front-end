import LogoImg from '@/components/auth/common/LogoImg';
import PasswordForm from '@/components/auth/password-form/PasswordForm';
import { mainContainer } from '@/styles/global-styles.css';

export default function ChangePasswordPage() {
  return (
    <section className={mainContainer}>
      <LogoImg />
      <PasswordForm />
    </section>
  );
}
``;
