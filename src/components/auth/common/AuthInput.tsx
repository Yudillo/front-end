import type React from 'react';
import { authInput } from './AuthInput.css';

interface AuthInputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validationMessage: string;
  checkButton?: string;
  onClick?: () => void;
}

export default function AuthInput({
  name,
  type,
  placeholder,
  value,
  validationMessage,
  onChange,
  checkButton,
  onClick,
}: AuthInputProps) {
  return (
    <div className={authInput.inputWrapper}>
      <input
        className={authInput.input}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
      />
      {checkButton && (
        <button
          className={authInput.checkButton}
          type='button'
          onClick={onClick}
        >
          {checkButton}
        </button>
      )}
      {validationMessage && (
        <p className={authInput.validationMessage}>{validationMessage}</p>
      )}
    </div>
  );
}
