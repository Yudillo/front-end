import type React from 'react';
import * as s from './AuthInput.css';

interface AuthInputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message: string;
  checkButton?: string;
  onClick?: () => void;
}

export default function AuthInput({
  name,
  type,
  placeholder,
  value,
  message,
  onChange,
  checkButton,
  onClick,
}: AuthInputProps) {
  return (
    <div className={s.contentWrapper}>
      <input
        className={s.inputBasic}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
      />
      {checkButton && (
        <button className={s.checkButton} type='button' onClick={onClick}>
          {checkButton}
        </button>
      )}
      {message && <p className={s.validation}>{message}</p>}
    </div>
  );
}
