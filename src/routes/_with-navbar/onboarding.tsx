import { createFileRoute, redirect } from '@tanstack/react-router';
import { authStore } from '../../features/auth/auth.store';
import Onboardingpage from '../../features/onboarding/onboarding.page';

export const Route = createFileRoute('/_with-navbar/onboarding')({
  beforeLoad: async () => {
    await authStore.init();

    if (!authStore.isAuthenticated) {
      throw redirect({
        to: "/login"
      })
    }

    if (authStore.isOnboarded) {
      throw redirect({
        to: "/dashboard"
      })
    }
  },
  component: Onboardingpage,
})

