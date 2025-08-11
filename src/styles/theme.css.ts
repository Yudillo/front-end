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
    desktop: { paddingContainer: '20px', paddingContent: '12px' },
    tablet: { paddingContainer: '10px', paddingContent: '12px' },
    mobile: { paddingContainer: '5px', paddingContent: '12px' },
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
  logoSize: {
    desktop: '150px',
    tablet: '150px',
    mobile: '106px',
  },
});
