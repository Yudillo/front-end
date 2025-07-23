import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const navBarContainer = style({
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const navBarWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: defaultTheme.color.basic,
});

export const navBarIcon = style({
  width: '2rem',
  height: '2rem',
});
