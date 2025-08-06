import { absoluteCenter } from '@/styles/global-styles.css';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const inputWrapper = style({
  position: 'relative',
  width: '100%',
  padding: defaultTheme.layoutPadding.mobile.paddingContent,
  display: 'grid',
  gap: '5px',
});

const input = style({
  height: '3.5rem',
  backgroundColor: defaultTheme.color.input,
  borderRadius: defaultTheme.borderRadius.medium,
  padding: defaultTheme.layoutPadding.mobile.paddingContent,
});

const checkButton = style([
  absoluteCenter,
  {
    right: '.5rem',
    top: '50%',
    color: defaultTheme.color.lightBlue,
  },
]);

const validationMessage = style({
  color: defaultTheme.color.orange,
  paddingLeft: '.5rem',
});

export const authInput = {
  inputWrapper,
  input,
  checkButton,
  validationMessage,
};
