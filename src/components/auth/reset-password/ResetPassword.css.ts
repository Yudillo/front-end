import { style } from '@vanilla-extract/css';
import { loginSection } from '../login/Login.css';

export const ResetPasswordSection = style([loginSection]);

export const formGapResetPassword = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
