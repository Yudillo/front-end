import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const overlaySection = style({
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
});

const modalSection = style({
  overflow: 'hidden',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '15rem',
  backgroundColor: defaultTheme.color.white,
  borderRadius: defaultTheme.borderRadius.md,
  border: `0.15rem solid ${defaultTheme.color.lightBlue}`,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
});

const modalHeader = style({
  height: '1.5rem',
  backgroundColor: defaultTheme.color.lightBlue,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 .2rem',
});

const modalXMarkButton = style({
  cursor: 'pointer',
});

const modalXMarkIcon = style({
  width: '1rem',
  height: '1rem',
  color: defaultTheme.color.white,
});

const modalMain = style({
  padding: '1rem 1rem 0 1rem',
});

const modalButtonWrapper = style({
  padding: '1rem',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
});

export const modal = {
  overlaySection,
  modalSection,
  modalHeader,
  modalXMarkButton,
  modalXMarkIcon,
  modalMain,
  modalButtonWrapper,
};
