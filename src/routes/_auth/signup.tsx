import { createFileRoute } from '@tanstack/react-router'
import SignupPage from '../../pages/Signup/SignupPage'

export const Route = createFileRoute('/_auth/signup')({
  component: SignupPage,
})
