import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const navBarContainer = style({
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const navBarWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: defaultTheme.color.basic,
});

const navBarIcon = style({
  width: '2rem',
  height: '2rem',
});

export const navBar = { navBarContainer, navBarWrapper, navBarIcon };
