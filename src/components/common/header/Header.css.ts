import { MEDIA_QUERY } from '@/constants/breakpoint';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  height: '4rem',
  '@media': {
    [MEDIA_QUERY.desktop]: {
      padding: defaultTheme.spacing[16],
    },
    [MEDIA_QUERY.tablet]: {
      padding: defaultTheme.spacing[10],
    },
    [MEDIA_QUERY.mobile]: {
      padding: defaultTheme.spacing[5],
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
  width: defaultTheme.iconSize.md,
  height: defaultTheme.iconSize.md,
});
