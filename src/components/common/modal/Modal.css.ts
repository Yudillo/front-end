import { absoluteCenter } from '@/styles/global-styles.css';
import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const modalSection = style([
  absoluteCenter,
  {
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    width: '15rem',
    backgroundColor: defaultTheme.color.white,
    borderRadius: defaultTheme.borderRadius.medium,
    border: `0.15rem solid ${defaultTheme.color.lightBlue}`,
  },
]);

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
  modalSection,
  modalHeader,
  modalXMarkButton,
  modalXMarkIcon,
  modalMain,
  modalButtonWrapper,
};
