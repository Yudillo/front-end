import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  padding: defaultTheme.layoutPadding.mobile.paddingLeft,
  height: '100%',
});
