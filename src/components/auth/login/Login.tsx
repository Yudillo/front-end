import Button from '@/components/common/button/Button';
import * as s from './Login.css';
import * as a from '@/components/auth/common/AuthCommon.css';

export default function Login() {
  return (
    <section>
      <div className={a.contentWrapper}>
        <input className={a.inputBasic} type='email' placeholder='이메일' />
      </div>
      <div className={a.contentWrapper}>
        <input
          className={a.inputBasic}
          type='password'
          placeholder='비밀번호'
        />
      </div>
      <div className={a.contentWrapper}>
        <p className={a.forgotPassword}>비밀번호를 잊으셨나요?</p>
      </div>
      <Button title='로그인' />
    </section>
  );
}
