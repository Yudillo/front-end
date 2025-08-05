import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const contentWrapper = style({
  position: 'relative',
  width: '100%',
  padding: '12px',
  display: 'grid',
  gap: '5px',
});

export const inputBasic = style({
  height: '3.5rem',
  backgroundColor: defaultTheme.color.input,
  borderRadius: defaultTheme.borderRadius.medium,
  padding: '12px',
});

export const checkButton = style({
  position: 'absolute',
  right: '.5rem',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  color: defaultTheme.color.lightBlue,
});

export const validation = style({
  color: defaultTheme.color.orange,
  paddingLeft: '.5rem',
});
