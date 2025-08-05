import { defaultTheme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonWrapper = style({
  padding: '12px',
  display: 'flex',
  justifyContent: 'center',
});

export const button = recipe({
  base: {
    width: '100%',
    height: '3.5rem',
    borderRadius: defaultTheme.borderRadius.medium,
  },
  variants: {
    backColor: {
      basic: { backgroundColor: defaultTheme.color.lightBlue },
      signup: { backgroundColor: defaultTheme.color.lightGrey50 },
    },
    color: {
      basic: { color: defaultTheme.color.white },
      signup: { color: defaultTheme.color.basic },
    },
  },
  defaultVariants: {
    backColor: 'basic',
    color: 'basic',
  },
});
