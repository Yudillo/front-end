import type React from 'react';
import { authInput } from './AuthInput.css';
import AuthCheckButton from './AuthCheckButton';

interface AuthInputProps {
  validationMessage: string;
  checkButtonTitle?: string;
  onClick?: () => void;
}

type AuthInputType = React.InputHTMLAttributes<HTMLInputElement> &
  AuthInputProps;

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
          <AuthCheckButton
            checkButtonTitle={checkButtonTitle}
            onClick={onClick}
          />
        </div>
      )}
      {validationMessage && (
        <p className={authInput.validationMessage}>{validationMessage}</p>
      )}
    </div>
  );
}
