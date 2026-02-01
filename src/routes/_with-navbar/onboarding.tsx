import { createFileRoute, redirect } from '@tanstack/react-router';
import { getAuthState } from '../../auth/authStore';
import OnboardingPage from '../../pages/Onboarding/OnboardingPage';

export const Route = createFileRoute('/_with-navbar/onboarding')({
  beforeLoad: () => {
    const { isAuthenticated, isOnboarded } = getAuthState();

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
  component: OnboardingPage,
})

