import DashboardMainPannel from '@/features/dashboard/Components/DashboardMainPannel'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-sidebar/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><DashboardMainPannel /></div>
}
