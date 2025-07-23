import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Header from '../components/common/header/Header.tsx';

import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx';

import type { QueryClient } from '@tanstack/react-query';
import NavBar from '@/components/common/navBar/NavBar.tsx';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />

      <Outlet />
      <NavBar />
      <TanStackRouterDevtools />

      <TanStackQueryLayout />
    </>
  ),
});
