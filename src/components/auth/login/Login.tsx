import AuthInput from '../common/AuthInput';
import { useState, type FormEvent } from 'react';
import { AUTH_MESSAGE } from '@/constants/validationMessage';
import { validationValue } from '@/utils/validation';
import { Link } from '@tanstack/react-router';
import type { AuthInputType } from '@/types/authInput';
import { loginForm } from './Login.css';
import { authCommon } from '../common/AuthCommon.css';
import ButtonWrapper from '@/components/common/button/ButtonWrapper';
import ButtonBasic from '@/components/common/button/ButtonBasic';
import Modal from '@/components/common/modal/Modal';
import { useModal } from '@/hooks/useModal';

export default function Login() {
  const { isOpen, isConfirm, message, handleOpen, handleClose, handleConfirm } =
    useModal();
  const [inputValue, setInputValue] = useState<
    Pick<AuthInputType, 'email' | 'password'>
  >({
    email: '',
    password: '',
  });
  const [validation, setValidation] = useState<{
    email: boolean;
    password: boolean;
  }>({ email: true, password: true });

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();

    const emailValidation = validationValue('email', inputValue.email);
    const passwordValidation = validationValue('password', inputValue.password);

    setValidation((prev) => ({
      ...prev,
      email: !!emailValidation,
      password: !!passwordValidation,
    }));

    if (Object.values(validation).every(Boolean)) {
      form.append('email', inputValue.email);
      form.append('password', inputValue.password);
    }
  };

  return (
    <section className={authCommon.authSection}>
      <form onSubmit={handleSubmitLogin}>
        <AuthInput
          name='email'
          type='email'
          placeholder='이메일'
          value={inputValue.email}
          onChange={(e) =>
            setInputValue((prev) => ({ ...prev, email: e.target.value }))
          }
          validationMessage={validation.email ? '' : AUTH_MESSAGE.email}
        />
        <AuthInput
          name='password'
          type='password'
          placeholder='비밀번호'
          value={inputValue.password}
          onChange={(e) =>
            setInputValue((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          validationMessage={validation.password ? '' : AUTH_MESSAGE.password}
        />
        <div className={loginForm.forgetPasswordWrapper}>
          <Link className={loginForm.forgetPasswordLink} to='/reset-password'>
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <ButtonWrapper>
          <ButtonBasic title='로그인' />
        </ButtonWrapper>
      </form>
      <div className={loginForm.signupWrapper}>
        <Link className={loginForm.signupLink} to='/signup'>
          계정이 없나요? 회원가입
        </Link>
      </div>
      <Modal isOpen={isOpen} isConfirm={isConfirm} onClose={handleClose}>
        {message}
      </Modal>
    </section>
  );
}
