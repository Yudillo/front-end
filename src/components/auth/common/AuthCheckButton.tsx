import type React from 'react';
import { authCheckButton } from './AuthCheckButton.css';

interface AuthCheckButtonProps {
  checkButtonTitle: string;
}

type AuthCheckButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  AuthCheckButtonProps;

export default function AuthCheckButton({
  checkButtonTitle,
  onClick,
  ...rest
}: AuthCheckButtonType) {
  return (
    <button
      className={authCheckButton.checkButton}
      type='button'
      onClick={onClick}
      {...rest}
    >
      {checkButtonTitle}
    </button>
  );
}
