import NavBar from '../../widgets/Navbar/Navbar'
import { Outlet } from '@tanstack/react-router'

export default function DefaultLayout() {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
