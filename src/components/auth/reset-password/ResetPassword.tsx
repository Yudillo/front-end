import React, { useState } from 'react';
import AuthInput from '../common/AuthInput';
import { AUTH_MESSAGE } from '@/constants/validationMessage';
import Button from '@/components/common/button/Button';
import { validationValue } from '@/utils/validation';
import { useNavigate } from '@tanstack/react-router';
import type { AuthInputType } from '@/types/AuthInput';
import { authCommon } from '../common/AuthCommon.css';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<
    Pick<AuthInputType, 'password' | 'passwordCheck'>
  >({
    password: '',
    passwordCheck: '',
  });
  const [validation, setValidation] = useState<{
    password: boolean;
    passwordCheck: boolean;
  }>({
    password: true,
    passwordCheck: true,
  });

  const inputs: {
    key: keyof typeof inputValue;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
  }[] = [
    { key: 'password', type: 'password', placeholder: '비밀번호' },
    { key: 'passwordCheck', type: 'password', placeholder: '비밀번호 확인' },
  ];

  const handleResetPassword = () => {
    console.log('비밀번호변경완료 모달창하기');
    navigate({ to: '/login' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();

    const passwordValidation = validationValue('password', inputValue.password);
    const passwordCheckValidation =
      inputValue.password === inputValue.passwordCheck;

    setValidation((prev) => ({
      ...prev,
      password: !!passwordValidation,
      passwordCheck: !!passwordCheckValidation,
    }));

    if (passwordValidation && passwordCheckValidation) {
      form.append('password', inputValue.password);

      setTimeout(() => {
        handleResetPassword();
      }, 1500);
    }
  };

  return (
    <section className={authCommon.authSection}>
      <form className={authCommon.formRow} onSubmit={handleSubmit}>
        <div>
          {inputs.map(({ key, type, placeholder }) => (
            <AuthInput
              key={key}
              name={key}
              type={type}
              placeholder={placeholder}
              value={inputValue[key]}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, [key]: e.target.value }))
              }
              validationMessage={validation[key] ? '' : AUTH_MESSAGE[key]}
            />
          ))}
        </div>
        <Button type='submit' title='비밀번호 변경' />
      </form>
    </section>
  );
}
