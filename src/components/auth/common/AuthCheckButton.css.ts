import { absoluteCenter } from '@/styles/global-styles.css';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const checkButton = style([
  absoluteCenter,
  {
    right: '.5rem',
    top: '50%',
    color: defaultTheme.color.lightBlue,
  },
]);

export const authCheckButton = { checkButton };
