import LogoImg from '@/components/auth/common/LogoImg';
import * as s from './ResetPasswordPage.css';
import ResetPassword from '@/components/auth/reset-password/ResetPassword';

export default function ResetPasswordPage() {
  return (
    <section className={s.resetPasswordContainer}>
      <LogoImg />
      <ResetPassword />
    </section>
  );
}
