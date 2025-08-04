import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const loginContainer = style({
  height: 'calc(100% - 106px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const contentWrapper = style({
  padding: '12px',
});

export const forgotPassword = style({
  color: defaultTheme.color.orange,
  marginBottom: '.5rem',
});

export const signupWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});

export const signupLink = style({
  color: defaultTheme.color.lightBlue,
});
