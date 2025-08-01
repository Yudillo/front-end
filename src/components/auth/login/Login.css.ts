import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  padding: '12px',
});

export const inputBasic = style({
  width: '100%',
  height: '3.5rem',
  backgroundColor: defaultTheme.color.input,
  borderRadius: defaultTheme.borderRadius.medium,
  padding: '12px',
});
