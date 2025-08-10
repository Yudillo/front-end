import { recipe } from '@vanilla-extract/recipes';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const modalOverlay = style({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
});

export const modalSection = style({
  overflow: 'hidden',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '15rem',
  backgroundColor: defaultTheme.color.white,
  borderRadius: defaultTheme.borderRadius.medium,
  outline: `0.15rem solid ${defaultTheme.color.lightBlue}`,
});

export const modalHeader = style({
  height: '1.5rem',
  backgroundColor: defaultTheme.color.lightBlue,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 .2rem',
});

export const modalXMarkButton = style({
  cursor: 'pointer',
});

export const modalXMarkIcon = style({
  width: '1rem',
  height: '1rem',
  color: defaultTheme.color.white,
});

export const modalMain = style({
  padding: '1rem 1rem 0 1rem',
});

export const modalButtonWrapper = style({
  padding: '1rem',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
});
