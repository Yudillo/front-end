import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const inputWrapper = style({
  position: 'relative',
  width: '100%',
  padding: defaultTheme.spacing[12],
  display: 'grid',
  gap: '5px',
});

const input = style({
  height: '3.5rem',
  backgroundColor: defaultTheme.color.input,
  borderRadius: defaultTheme.borderRadius[12],
  padding: defaultTheme.spacing[12],
});

const validationMessage = style({
  color: defaultTheme.color.orange,
  paddingLeft: '.5rem',
});

export const authInput = {
  inputWrapper,
  input,
  validationMessage,
};
