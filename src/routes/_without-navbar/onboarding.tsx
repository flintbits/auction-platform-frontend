import OnboardingPage from '@/pages/onboarding/OnboardingPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_without-navbar/onboarding')({
  component: OnboardingPage,
})

