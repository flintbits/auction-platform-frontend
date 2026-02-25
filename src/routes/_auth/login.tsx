import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAuthStore } from '../../app/store/auth/auth.store';
import LoginPage from '../../pages/login/LoginPage';

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
  component: LoginPage,
})

