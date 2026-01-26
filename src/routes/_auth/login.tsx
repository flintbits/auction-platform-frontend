import { createFileRoute } from '@tanstack/react-router'
import LoginPage from '../../pages/Login/LoginPage'
import LoginShimmer from '../../pages/Login/LoginShimmer'

export const Route = createFileRoute('/_auth/login')({
  // loader: async () => {
  //   await new Promise(r => setTimeout(r, 10000))
  // },
  component: LoginPage,
  pendingComponent: LoginShimmer
})

