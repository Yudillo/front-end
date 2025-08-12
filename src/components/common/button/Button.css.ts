import { defaultTheme } from '@/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const button = recipe({
  base: {
    width: '100%',
    height: '3.5rem',
    borderRadius: defaultTheme.borderRadius[12],
  },
  variants: {
    buttonStyle: {
      basic: {
        backgroundColor: defaultTheme.color.lightBlue,
        color: defaultTheme.color.white,
      },
      signup: {
        backgroundColor: defaultTheme.color.lightGrey50,
        color: defaultTheme.color.basic,
      },
    },
  },
  defaultVariants: {
    buttonStyle: 'basic',
  },
});

export const buttonVariant = { button };
