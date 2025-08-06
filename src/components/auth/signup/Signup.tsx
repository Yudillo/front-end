import React, { useState } from 'react';
import AuthInput from '../common/AuthInput';
import { AUTH_MESSAGE } from '@/constants/validationMessage';
import Button from '@/components/common/button/Button';
import { validationValue } from '@/utils/validation';
import { useNavigate } from '@tanstack/react-router';
import type { AuthInputType } from '@/types/AuthInput';
import { authCommon } from '../common/AuthCommon.css';

export default function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<AuthInputType>({
    email: '',
    code: '',
    password: '',
    passwordCheck: '',
    nickname: '',
  });
  const [validation, setValidation] = useState<{
    email: boolean;
    code: boolean;
    password: boolean;
    passwordCheck: boolean;
    nickname: boolean;
  }>({
    email: true,
    code: true,
    password: true,
    passwordCheck: true,
    nickname: true,
  });

  const handleSignup = () => {
    console.log('회원가입완료 모달창하기');
    navigate({ to: '/login' });
  };

  const handlePostCode = () => {
    console.log('코드전송');
  };

  const handlePostVerifyCode = () => {
    console.log('인증확인');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();

    const emailValidation = validationValue('email', inputValue.email);
    const codeValidation = validationValue('code', inputValue.code);
    const passwordValidation = validationValue('password', inputValue.password);
    const passwordCheckValidation =
      inputValue.password === inputValue.passwordCheck;
    const nicknameValidation = validationValue('nickname', inputValue.nickname);

    setValidation((prev) => ({
      ...prev,
      email: !!emailValidation,
      code: !!codeValidation,
      password: !!passwordValidation,
      passwordCheck: !!passwordCheckValidation,
      nickname: !!nicknameValidation,
    }));

    if (
      emailValidation &&
      codeValidation &&
      passwordValidation &&
      passwordCheckValidation &&
      nicknameValidation
    ) {
      form.append('email', inputValue.email);
      form.append('password', inputValue.password);
      form.append('nickname', inputValue.nickname);

      setTimeout(() => {
        handleSignup();
      }, 1500);
    }
  };

  const handleChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    setInputValue((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const inputs: {
    key: keyof typeof inputValue;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    checkButton?: string;
    onClick?: () => void;
  }[] = [
    {
      key: 'email',
      type: 'email',
      placeholder: '이메일',
      checkButton: '코드전송',
      onClick: handlePostCode,
    },
    {
      key: 'code',
      type: 'text',
      placeholder: '인증코드',
      checkButton: '인증확인',
      onClick: handlePostVerifyCode,
    },
    { key: 'password', type: 'password', placeholder: '비밀번호' },
    { key: 'passwordCheck', type: 'password', placeholder: '비밀번호 확인' },
    { key: 'nickname', type: 'text', placeholder: '닉네임' },
  ];

  return (
    <section className={authCommon.authSection}>
      <form className={authCommon.formRow} onSubmit={handleSubmit}>
        <div>
          {inputs.map(
            ({ key, type, placeholder, checkButton, onClick }, idx) => (
              <AuthInput
                key={key + idx}
                name={key}
                type={type}
                placeholder={placeholder}
                value={inputValue[key]}
                onChange={(e) => handleChangeInputValue(e, key)}
                validationMessage={validation[key] ? '' : AUTH_MESSAGE[key]}
                checkButton={checkButton}
                onClick={onClick}
              />
            ),
          )}
        </div>
        <Button type='submit' title='회원가입' />
      </form>
    </section>
  );
}
