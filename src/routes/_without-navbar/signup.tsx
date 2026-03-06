import AuthLayout from '@features/auth/components/AuthLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_without-navbar/signup')({
  component: () => <AuthLayout type="signup" />,
})
