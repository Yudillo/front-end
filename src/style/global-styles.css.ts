import { mediaQuery } from '@/constants/breakpoint';
import { globalStyle } from '@vanilla-extract/css';
import { defaultTheme } from './theme.css';

globalStyle('*, html, body', {
  '@media': Object.keys(mediaQuery).reduce((acc, key) => {
    const breakpoint = key as keyof typeof mediaQuery;
    return {
      ...acc,
      [mediaQuery[breakpoint]]: defaultTheme.layoutWidth[breakpoint],
    };
  }, {}),
});
