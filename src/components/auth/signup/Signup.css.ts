import { style } from '@vanilla-extract/css';
import { loginSection } from '../login/Login.css';
import { formGapResetPassword } from '../reset-password/ResetPassword.css';

export const signupSection = style([loginSection]);

export const formGapSignup = style([formGapResetPassword]);
