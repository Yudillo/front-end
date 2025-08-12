import { MEDIA_QUERY } from '@/constants/breakpoint';
import { flexBetween } from '@/styles/global-styles.css';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const authSection = style([
  {
    '@media': {
      [MEDIA_QUERY.desktop]: {
        height: `calc(100% - ${defaultTheme.logoSize.desktop})`,
      },
      [MEDIA_QUERY.tablet]: {
        height: `calc(100% - ${defaultTheme.logoSize.tablet})`,
      },
      [MEDIA_QUERY.mobile]: {
        height: `calc(100% - ${defaultTheme.logoSize.mobile})`,
      },
    },
    flexDirection: 'column',
  },
  flexBetween,
]);

const formRow = style([
  { height: '100%', flexDirection: 'column' },
  flexBetween,
]);

export const authCommon = { authSection, formRow };
