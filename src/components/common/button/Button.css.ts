import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const buttonWrapper = style({
  padding: '12px',
  display: 'flex',
  justifyContent: 'center',
});

export const button = style({
  width: '100%',
  height: '3.5rem',
  borderRadius: defaultTheme.borderRadius.medium,
  backgroundColor: defaultTheme.color.lightBlue,
  color: defaultTheme.color.white,
});
