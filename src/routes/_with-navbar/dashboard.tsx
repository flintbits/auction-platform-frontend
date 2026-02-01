import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-navbar/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_with-navbar/dashboard"!</div>
}
