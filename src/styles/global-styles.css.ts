import { MEDIA_QUERY } from '@/constants/breakpoint';
import { globalStyle } from '@vanilla-extract/css';
import { defaultTheme } from './theme.css';

globalStyle('*, html, body', {
  '@media': Object.keys(MEDIA_QUERY).reduce((acc, key) => {
    const breakpoint = key as keyof typeof MEDIA_QUERY;
    return {
      ...acc,
      [MEDIA_QUERY[breakpoint]]: defaultTheme.layoutWidth[breakpoint],
    };
  }, {}),
});
