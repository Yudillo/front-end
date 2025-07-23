import { defaultTheme } from '@/style/theme.css';
import { style } from '@vanilla-extract/css';

export const navBarContainer = style({});

export const navBarWrapper = style({
  display: 'flex',
  color: defaultTheme.color.basic,
});

export const navBarIcon = style({
  width: '1.5rem',
  height: '1.5rem',
});
