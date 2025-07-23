import { mediaQuery } from '@/constants/breakpoint';
import { defaultTheme } from '@/style/theme.css';
import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  height: '4rem',
  '@media': {
    [mediaQuery.desktop]: {
      padding: defaultTheme.headerPadding.desktop.padding,
    },
    [mediaQuery.tablet]: {
      padding: defaultTheme.headerPadding.tablet.padding,
    },
    [mediaQuery.mobile]: {
      padding: defaultTheme.headerPadding.mobile.padding,
    },
  },
});

export const headerLogo = style({
  width: '3.5rem',
  height: '3.5rem',
});

export const headerWrapper = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const headerTitle = style({
  fontSize: '1.2rem',
  fontWeight: '600',
});

export const headerIconWrapper = style({
  width: '4.3rem',
  height: 'auto',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  paddingRight: '.8rem',
});

export const headerIcon = style({
  width: '1.5rem',
  height: '1.5rem',
});
