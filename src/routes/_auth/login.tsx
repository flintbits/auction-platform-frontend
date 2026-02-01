import { createFileRoute, redirect } from '@tanstack/react-router';
import { authStore } from '../../features/auth/auth.store';
import LoginPage from '../../pages/Login/LoginPage';

export const Route = createFileRoute('/_auth/login')({
  beforeLoad: async () => {
    console.log("LOGIN beforeLoad running");

    await authStore.init();

    console.log("Auth state:", authStore.snapshot);

    if (!authStore.isAuthenticated) {
      return;
    }
    if (!authStore.isOnboarded) {
      throw redirect({ to: "/onboarding" });
    }
    throw redirect({ to: "/dashboard" });
  },
  component: LoginPage,
})

