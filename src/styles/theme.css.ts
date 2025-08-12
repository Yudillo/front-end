import { createGlobalTheme } from '@vanilla-extract/css';

export const defaultTheme = createGlobalTheme(':root', {
  color: {
    lightBlue: '#60B5FF',
    lightSkyBlue: '#AFDDFF',
    lightGrey50: 'rgba(217, 217, 217, 0.5)',
    white: '#FFFFFF',
    black: '#000000',
    beige: '#FFECDB',
    orange: '#FF9149',
    basic: '#6B7582',
    input: '#F0F2F5',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '30px',
    half: '50%',
  },
  layoutWidth: {
    desktop: { maxWidth: '1440px' },
    tablet: { maxWidth: '1023px' },
    mobile: { maxWidth: '768px' },
  },
  spacing: {
    5: '5px',
    10: '10px',
    12: '12px',
    16: '16px',
    20: '20px',
  },
  iconSize: {
    sm: '20px',
    md: '24px',
  },
  logoSize: {
    desktop: '150px',
    tablet: '150px',
    mobile: '106px',
  },
});
