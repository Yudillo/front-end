import { flexJustifyCenter } from '@/styles/global-styles.css';
import { authInput } from './../common/AuthInput.css';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const forgetPasswordWrapper = style([authInput.inputWrapper]);

const forgetPasswordLink = style({
  color: defaultTheme.color.orange,
  marginBottom: '.5rem',
});

const signupWrapper = style([flexJustifyCenter]);

const signupLink = style({
  color: defaultTheme.color.lightBlue,
});

export const loginForm = {
  forgetPasswordWrapper,
  forgetPasswordLink,
  signupWrapper,
  signupLink,
};
