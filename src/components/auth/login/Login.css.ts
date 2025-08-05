import { contentWrapper } from './../common/AuthInput.css';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const loginSection = style({
  height: 'calc(100% - 106px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const extendContentWrapper = style([contentWrapper]);

export const forgotPasswordLink = style({
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
