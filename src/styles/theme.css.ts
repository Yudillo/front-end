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
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '30px',
    half: '50%',
  },
  layoutWidth: {
    desktop: { maxWidth: '1440px' },
    tablet: { maxWidth: '1023px' },
    mobile: { maxWidth: '768px' },
  },
  layoutPadding: {
    desktop: { paddingLeft: '20px', paddingRight: '20px' },
    tablet: { paddingLeft: '10px', paddingRight: '10px' },
    mobile: { paddingLeft: '5px', paddingRight: '5px' },
  },
  headerPadding: {
    desktop: { padding: '16px' },
    tablet: { padding: '10px' },
    mobile: { padding: '5px' },
  },
  headerIcon: {
    desktop: { width: '24px', height: '24px' },
    tablet: { width: '24px', height: '24px' },
    mobile: { width: '24px', height: '24px' },
  },
  iconSize: {
    small: { width: '20px', height: '20px' },
    basic: { width: '24px', height: '24px' },
  },
});
