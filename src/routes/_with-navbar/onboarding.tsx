import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAuthStore } from '../../app/store/auth/auth.store';
import Onboardingpage from '../../features/onboarding/onboarding.page';

export const Route = createFileRoute('/_with-navbar/onboarding')({
  beforeLoad: async () => {
    const { isAuthenticated, isOnboarded } = useAuthStore.getState();

    if (!isAuthenticated) {
      throw redirect({
        to: "/login"
      })
    }

    if (isOnboarded) {
      throw redirect({
        to: "/dashboard"
      })
    }
  },
  component: Onboardingpage,
})

