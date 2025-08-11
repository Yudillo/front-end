import { MEDIA_QUERY } from '@/constants/breakpoint';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const imgSection = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
});

const img = style({
  '@media': {
    [MEDIA_QUERY.desktop]: {
      width: defaultTheme.logoSize.desktop,
      height: defaultTheme.logoSize.desktop,
    },
    [MEDIA_QUERY.tablet]: {
      width: defaultTheme.logoSize.tablet,
      height: defaultTheme.logoSize.tablet,
    },
    [MEDIA_QUERY.mobile]: {
      width: defaultTheme.logoSize.mobile,
      height: defaultTheme.logoSize.mobile,
    },
  },
});

export const logoImg = { imgSection, img };
