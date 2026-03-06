import { useAuthStore } from '@app/store/auth/auth.store';
import AuthLayout from '@features/auth/components/AuthLayout';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_without-navbar/login')({
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
  component: () => <AuthLayout type="login" />,
})

