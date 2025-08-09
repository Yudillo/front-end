import type React from 'react';
import { buttonVariant } from './Button.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonStyle?: 'basic' | 'signup';
}

export default function Button({
  title,
  type,
  buttonStyle,
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonVariant.button({ buttonStyle })} {...rest}>
      {title}
    </button>
  );
}
