import { flexBetween } from '@/styles/global-styles.css';
import { style } from '@vanilla-extract/css';

const authSection = style([
  {
    height: 'calc(100% - 106px)',
    flexDirection: 'column',
  },
  flexBetween,
]);

const formRow = style([
  { height: '100%', flexDirection: 'column' },
  flexBetween,
]);

export const authCommon = { authSection, formRow };
