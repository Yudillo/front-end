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
import { updatePassword } from '@/supabase/functions/auth/updatePassword';
import Modal from '@/components/common/modal/Modal';
import { useModal } from '@/hooks/useModal';

interface InputProps {
  key: keyof Pick<AuthInputType, 'password' | 'passwordCheck'>;
  checkButton?: string;
}

type InputType = InputHTMLAttributes<HTMLInputElement> & InputProps;

export default function PasswordForm() {
  const navigate = useNavigate();
  const { isOpen, message, handleOpen, handleClose } = useModal();
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordValidation = validationValue('password', inputValue.password);
    const passwordCheckValidation =
      inputValue.password === inputValue.passwordCheck
        ? validationValue('passwordCheck', inputValue.passwordCheck)
        : false;

    setValidation((prev) => ({
      ...prev,
      password: !!passwordValidation,
      passwordCheck: !!passwordCheckValidation,
    }));

    if (!Object.values(validation).every(Boolean)) return;

    const password = inputValue.password;
    const { isSuccess, message } = await updatePassword({ password });

    handleOpen(message);

    if (!isSuccess) {
      return;
    }
    setTimeout(() => {
      navigate({ to: '/auth/login' });
    }, 1500);
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
      <Modal isOpen={isOpen} onClose={handleClose}>
        {message}
      </Modal>
    </section>
  );
}
