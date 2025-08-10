import { createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx';

import type { QueryClient } from '@tanstack/react-query';
import LayoutMobile from '@/layout/layout-mobile/LayoutMobile.tsx';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <LayoutMobile />

      <TanStackRouterDevtools />

      <TanStackQueryLayout />
    </>
  ),
});
