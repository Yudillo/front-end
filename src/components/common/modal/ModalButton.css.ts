import { defaultTheme } from '@/styles/theme.css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

const button = recipe({
  base: {
    borderRadius: defaultTheme.borderRadius.medium,
    color: defaultTheme.color.white,
    padding: '.3rem .7rem',
  },
  variants: {
    variantStyle: {
      check: { backgroundColor: defaultTheme.color.lightBlue },
      cancel: { backgroundColor: defaultTheme.color.orange },
    },
  },
  defaultVariants: {
    variantStyle: 'check',
  },
});

export type ButtonVariantStyle = RecipeVariants<typeof button>;
export const modalButton = { button };
