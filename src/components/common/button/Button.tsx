import type React from 'react';
import * as s from './Button.css';

interface ButtonProps {
  title: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export default function Button({ title, type }: ButtonProps) {
  return (
    <div className={s.buttonWrapper}>
      <button className={s.button} type={type}>
        {title}
      </button>
    </div>
  );
}
