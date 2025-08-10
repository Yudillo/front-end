import { createFileRoute } from '@tanstack/react-router';
import '../styles/global-styles.css';
import Index from '@/pages/index/Index';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <Index />;
}
