import { style } from '@vanilla-extract/css';

const container = style({
  margin: '0 auto',
});

const mainWrapper = style({
  height: 'calc(100vh - 8rem)',
});

export const layoutMobile = { container, mainWrapper };
