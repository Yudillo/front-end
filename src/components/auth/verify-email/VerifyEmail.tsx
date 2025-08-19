import { useState, type FormEvent } from 'react';
import { authCommon } from '../common/AuthCommon.css';
import AuthInput from '../common/AuthInput';
import ButtonWrapper from '@/components/common/button/ButtonWrapper';
import ButtonBasic from '@/components/common/button/ButtonBasic';

export default function VerifyEmail() {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={authCommon.authSection}>
      <form className={authCommon.formRow} onSubmit={handleSubmit}>
        <AuthInput
          name='email'
          type='email'
          placeholder='이메일'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validationMessage={''}
        />
        <ButtonWrapper>
          <ButtonBasic title='이메일 인증' />
        </ButtonWrapper>
      </form>
    </section>
  );
}
