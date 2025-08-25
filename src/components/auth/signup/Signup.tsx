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
import { addUser } from '@/supabase/functions/auth/signup.api';
import { useModal } from '@/hooks/useModal';
import Modal from '@/components/common/modal/Modal';

interface InputProps {
  key: keyof AuthInputType;
  checkButton?: string;
  onClick?: () => void;
}

type InputType = InputHTMLAttributes<HTMLInputElement> & InputProps;

export default function Signup() {
  const navigate = useNavigate();
  const { isOpen, isConfirm, message, handleOpen, handleConfirm, handleClose } =
    useModal();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<AuthInputType>({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
  });
  const [validation, setValidation] = useState<{
    email: boolean;
    password: boolean;
    passwordCheck: boolean;
    nickname: boolean;
  }>({
    email: true,
    password: true,
    passwordCheck: true,
    nickname: true,
  });

  const handleModalAction = () => {
    if (!isSuccess) return handleClose();
    navigate({ to: '/auth/login' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValidation = validationValue('email', inputValue.email);
    const passwordValidation = validationValue('password', inputValue.password);
    const passwordCheckValidation =
      inputValue.password === inputValue.passwordCheck
        ? validationValue('passwordCheck', inputValue.passwordCheck)
        : false;
    const nicknameValidation = validationValue('nickname', inputValue.nickname);

    setValidation((prev) => ({
      ...prev,
      email: !!emailValidation,
      password: !!passwordValidation,
      passwordCheck: passwordCheckValidation,
      nickname: !!nicknameValidation,
    }));

    if (
      !emailValidation ||
      !passwordValidation ||
      !passwordCheckValidation ||
      !nicknameValidation
    ) {
      return;
    }

    const email = inputValue.email;
    const password = inputValue.password;
    const nickname = inputValue.nickname;
    const { isSuccess: success, message } = await addUser({
      email,
      password,
      nickname,
    });
    setIsSuccess(success);
    handleOpen(message);

    if (!success) {
      return;
    }
  };

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const inputs: InputType[] = [
    {
      key: 'email',
      type: 'email',
      placeholder: '이메일',
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
            (
              { key: key, type, placeholder, checkButton, onClick: onClick },
              idx,
            ) => (
              <AuthInput
                key={key + idx}
                name={key}
                type={type}
                placeholder={placeholder}
                value={inputValue[key]}
                onChange={handleChangeInputValue}
                validationMessage={validation[key] ? '' : AUTH_MESSAGE[key]}
                checkButtonTitle={checkButton}
                onClick={onClick}
              />
            ),
          )}
        </div>
        <ButtonWrapper>
          <ButtonBasic title='회원가입' />
        </ButtonWrapper>
      </form>
      <Modal
        isOpen={isOpen}
        isConfirm={isConfirm}
        onCheck={handleModalAction}
        onClose={handleClose}
      >
        {message}
      </Modal>
    </section>
  );
}
