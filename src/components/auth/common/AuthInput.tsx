import type React from 'react';
import * as s from './AuthCommon.css';

interface AuthInputProps {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
}

export default function AuthInput({
  type,
  placeholder,
  value,
  message,
  onChange,
}: AuthInputProps) {
  return (
    <div className={s.contentWrapper}>
      <input
        className={s.inputBasic}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
      {message && <p className={s.validation}>{message}</p>}
    </div>
  );
}
