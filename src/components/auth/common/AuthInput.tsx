import { authInput } from './AuthInput.css';
import AuthCheckButton from './AuthCheckButton';
import type { InputHTMLAttributes } from 'react';

interface AuthInputProps {
  validationMessage: string;
  checkButtonTitle?: string;
  onClick?: () => void;
}

type AuthInputType = InputHTMLAttributes<HTMLInputElement> & AuthInputProps;

export default function AuthInput({
  validationMessage,
  checkButtonTitle,
  onClick,
  ...rest
}: AuthInputType) {
  return (
    <div className={authInput.inputWrapper}>
      <input {...rest} className={authInput.input} />
      {checkButtonTitle && (
        <div>
          <AuthCheckButton onClick={onClick}>
            {checkButtonTitle}
          </AuthCheckButton>
        </div>
      )}
      {validationMessage && (
        <p className={authInput.validationMessage}>{validationMessage}</p>
      )}
    </div>
  );
}
