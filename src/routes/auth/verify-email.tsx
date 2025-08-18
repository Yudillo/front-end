import VerifyEmailPage from '@/pages/auth/VerifyEmailPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/verify-email')({
  component: RouteComponent,
});

function RouteComponent() {
  return <VerifyEmailPage />;
}
