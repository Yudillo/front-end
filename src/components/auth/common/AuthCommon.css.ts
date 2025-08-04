import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const contentWrapper = style({
  padding: '12px',
  display: 'grid',
  gap: '5px',
});

export const inputBasic = style({
  width: '100%',
  height: '3.5rem',
  backgroundColor: defaultTheme.color.input,
  borderRadius: defaultTheme.borderRadius.medium,
  padding: '12px',
});

export const validation = style({
  color: defaultTheme.color.orange,
  paddingLeft: '.5rem',
});
