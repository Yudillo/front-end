import ChangePasswordPage from '@/pages/auth/ChangePasswordPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/change-password')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ChangePasswordPage />;
}
