import type React from 'react';
import { authCheckButton } from './AuthCheckButton.css';

interface AuthCheckButtonProps {
  checkButtonTitle: string;
}

type AuthCheckButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  AuthCheckButtonProps;

export default function AuthCheckButton({
  checkButtonTitle,
  ...rest
}: AuthCheckButtonType) {
  return (
    <button {...rest} className={authCheckButton.checkButton} type='button'>
      {checkButtonTitle}
    </button>
  );
}
