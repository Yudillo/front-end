import type React from 'react';
import * as s from './Button.css';

interface ButtonProps {
  title: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  backColor?: 'basic' | 'signup';
  color?: 'basic' | 'signup';
}

export default function Button({ title, type, backColor, color }: ButtonProps) {
  return (
    <div className={s.buttonWrapper}>
      <button className={s.button({ backColor, color })} type={type}>
        {title}
      </button>
    </div>
  );
}
