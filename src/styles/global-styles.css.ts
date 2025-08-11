import { MEDIA_QUERY } from '@/constants/breakpoint';
import { globalStyle, style } from '@vanilla-extract/css';
import { defaultTheme } from './theme.css';
import { layoutMobile } from '@/layout/layout-mobile/LayoutMobile.css';

globalStyle(layoutMobile.container, {
  '@media': Object.keys(MEDIA_QUERY).reduce((acc, key) => {
    const breakpoint = key as keyof typeof MEDIA_QUERY;
    return {
      ...acc,
      [MEDIA_QUERY[breakpoint]]: defaultTheme.layoutWidth[breakpoint],
    };
  }, {}),
});

export const mainContainer = style({
  height: '100%',
  '@media': Object.keys(MEDIA_QUERY).reduce((acc, key) => {
    const breakpoint = key as keyof typeof MEDIA_QUERY;
    return {
      ...acc,
      [MEDIA_QUERY[breakpoint]]: {
        padding: defaultTheme.layoutPadding[breakpoint].paddingContainer,
      },
    };
  }, {}),
});

export const flexAlignItemsCenter = style({
  display: 'flex',
  alignItems: 'center',
});

export const flexJustifyCenter = style({
  display: 'flex',
  justifyContent: 'center',
});

export const flexBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const absoluteCenter = style({
  position: 'absolute',
  transform: 'translate(-50%,-50%)',
});
