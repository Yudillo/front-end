import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type InputHTMLAttributes,
} from 'react';
import AuthInput from '../common/AuthInput';
import { AUTH_MESSAGE } from '@/constants/validationMessage';
import { validationValue } from '@/utils/validation';
import { useNavigate } from '@tanstack/react-router';
import type { AuthInputType } from '@/types/authInput';
import { authCommon } from '../common/AuthCommon.css';
import ButtonWrapper from '@/components/common/button/ButtonWrapper';
import ButtonBasic from '@/components/common/button/ButtonBasic';

interface InputProps {
  key: keyof Pick<AuthInputType, 'password' | 'passwordCheck'>;
  checkButton?: string;
}

type InputType = InputHTMLAttributes<HTMLInputElement> & InputProps;

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

  const handleResetPassword = () => {
    console.log('비밀번호변경완료 모달창하기');
    navigate({ to: '/login' });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    if (Object.values(validation).every(Boolean)) {
      form.append('password', inputValue.password);

      setTimeout(() => {
        handleResetPassword();
      }, 1500);
    }
  };

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const inputs: InputType[] = [
    { key: 'password', type: 'password', placeholder: '새 비밀번호' },
    {
      key: 'passwordCheck',
      type: 'password',
      placeholder: '새 비밀번호 확인',
    },
  ];

  return (
    <section className={authCommon.authSection}>
      <form className={authCommon.formRow} onSubmit={handleSubmit}>
        <div>
          {inputs.map(({ key, type, placeholder }, idx) => (
            <AuthInput
              key={key + idx}
              name={key}
              type={type}
              placeholder={placeholder}
              value={inputValue[key]}
              onChange={(e) => handleChangeInputValue(e)}
              validationMessage={validation[key] ? '' : AUTH_MESSAGE[key]}
            />
          ))}
        </div>
        <ButtonWrapper>
          <ButtonBasic title='비밀번호 변경' />
        </ButtonWrapper>
      </form>
    </section>
  );
}
