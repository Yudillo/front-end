import type React from 'react';
import { authInput } from './AuthInput.css';
import AuthCheckButton from './AuthCheckButton';

interface AuthInputProps {
  key: string;
  validationMessage: string;
  checkButtonTitle?: string;
  onClick?: () => void;
}

type AuthInputType = React.InputHTMLAttributes<HTMLInputElement> &
  AuthInputProps;

export default function AuthInput({
  key: key,
  type,
  placeholder,
  value,
  validationMessage,
  onChange,
  checkButtonTitle,
  onClick,
}: AuthInputType) {
  return (
    <div className={authInput.inputWrapper}>
      <input
        className={authInput.input}
        type={type}
        placeholder={placeholder}
        value={value}
        key={key}
        onChange={onChange}
      />
      {checkButtonTitle && (
        <AuthCheckButton
          checkButtonTitle={checkButtonTitle}
          onClick={onClick}
        />
      )}
      {validationMessage && (
        <p className={authInput.validationMessage}>{validationMessage}</p>
      )}
    </div>
  );
}
