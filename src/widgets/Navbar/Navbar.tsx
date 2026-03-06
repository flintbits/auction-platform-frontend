import { Button } from "@shared/ui/Button/Button"
import { useNavigate } from "@tanstack/react-router"
import { logout } from "../../shared/api/auth.service"
import styles from "./Navbar.module.css"

export default function NavBar() {
    const navigate = useNavigate()
    // const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

    const isAuthenticated = false

    const handleLogout = async () => {
        await logout()
        navigate({ to: "/" })
    }

    return (
        <nav className={styles.navbar}>
            {/* LEFT */}
            <div className={styles.left}>
                <div className={styles.logo} onClick={() => navigate({ to: "/" })}>
                    AuctionHub
                </div>

                {isAuthenticated && (
                    <div className={styles.navLinks}>
                        <span onClick={() => navigate({ to: "/dashboard" })}>Dashboard</span>
                        <span onClick={() => navigate({ to: "/auctions" })}>Auctions</span>
                        <span onClick={() => navigate({ to: "/applications" })}>Applications</span>
                    </div>
                )}
            </div>

            {/* RIGHT */}
            <div className={styles.right}>
                {isAuthenticated ? (
                    <>
                        <button className={styles.icon}>🔔</button>

                        <div className={styles.avatar}>PP</div>

                        <Button size="sm" variant="primary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            size="sm"
                            variant="primary"
                            onClick={() => navigate({ to: "/login" })}
                        >
                            Log in
                        </Button>

                        <Button
                            size="sm"
                            variant="primary"
                            onClick={() => navigate({ to: "/signup" })}
                        >
                            Sign up
                        </Button>
                    </>
                )}
            </div>
        </nav>
    )
}
