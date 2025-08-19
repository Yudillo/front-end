import SignupPage from '@/pages/auth/SignupPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupPage />;
}
