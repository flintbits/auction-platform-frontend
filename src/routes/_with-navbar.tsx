import { createFileRoute, Outlet } from '@tanstack/react-router'
import NavBar from '../widgets/Navbar/Navbar'

export const Route = createFileRoute('/_with-navbar')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        <NavBar />
        <Outlet />
    </div>
}
