import type React from 'react';
import { buttonVariant } from './Button.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  buttonStyle?: 'basic' | 'signup';
}

export default function Button({ title, type, buttonStyle }: ButtonProps) {
  return (
    <button className={buttonVariant.button({ buttonStyle })} type={type}>
      {title}
    </button>
  );
}
