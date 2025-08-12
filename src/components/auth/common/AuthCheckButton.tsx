import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { authCheckButton } from './AuthCheckButton.css';

type AuthCheckButtonType = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export default function AuthCheckButton({
  children,
  ...rest
}: AuthCheckButtonType) {
  return (
    <button {...rest} className={authCheckButton.checkButton} type='button'>
      {children}
    </button>
  );
}
