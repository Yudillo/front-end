import Button from '@/components/common/button/Button';
import * as s from './Login.css';
import * as a from '@/components/auth/common/AuthCommon.css';
import AuthInput from '../common/AuthInput';
import { useState } from 'react';
import { AUTH_MESSAGE } from '@/constants/validationMessage';
import { validationValue } from '@/utils/validation';
import { Link } from '@tanstack/react-router';

export default function Login() {
  const [inputValue, setInputValue] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });
  const [validation, setValidation] = useState<{
    email: boolean;
    password: boolean;
  }>({ email: true, password: true });

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,16}$/;

    const form = new FormData();

    const emailValidation = validationValue(emailRegex, inputValue.email);
    const passwordValidation = validationValue(
      passwordRegex,
      inputValue.password,
    );

    setValidation((prev) => ({
      ...prev,
      email: !!emailValidation,
      password: !!passwordValidation,
    }));

    if (emailValidation && passwordValidation) {
      form.append('email', inputValue.email);
      form.append('password', inputValue.password);
    }
  };

  return (
    <section className={s.loginContainer}>
      <form onSubmit={handleSubmitLogin}>
        <AuthInput
          type='email'
          placeholder='이메일'
          value={inputValue.email}
          onChange={(e) =>
            setInputValue((prev) => ({ ...prev, email: e.target.value }))
          }
          message={validation.email ? '' : AUTH_MESSAGE.email}
        />
        <AuthInput
          type='password'
          placeholder='비밀번호'
          value={inputValue.password}
          onChange={(e) =>
            setInputValue((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          message={validation.password ? '' : AUTH_MESSAGE.password}
        />
        <div className={a.contentWrapper}>
          <Link className={s.forgotPasswordLink} to='/reset-password'>
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <Button title='로그인' type='submit' />
      </form>

      <div className={s.signupWrapper}>
        <Link className={s.signupLink} to='/signup'>
          계정이 없나요? 회원가입
        </Link>
      </div>
    </section>
  );
}
