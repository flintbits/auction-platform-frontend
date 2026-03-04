import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAuthStore } from '../../app/store/auth/auth.store';
import AuthLayout from '../../features/auth/components/AuthLayout';

export const Route = createFileRoute('/_auth/login')({
  beforeLoad: async () => {
    const { isAuthenticated, isOnboarded } = useAuthStore.getState();

    if (!isAuthenticated) {
      return;
    }
    if (!isOnboarded) {
      throw redirect({ to: "/onboarding" });
    }
    throw redirect({ to: "/dashboard" });
  },
  component: AuthLayout,
})

