import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-navbar/accountsetup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_with-navbar/accountsetup"!</div>
}
