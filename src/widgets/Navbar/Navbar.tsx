import { Button } from "@shared/ui/Button/Button";
import { useNavigate } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../app/providers/Theme";
import { useAuthStore } from "../../app/store/auth/auth.store";
import { logout } from "../../shared/api/auth.service";
import styles from "./Navbar.module.css";

type NavIntent = "login" | "logout" | "signup";

export default function NavBar() {
    const navigate = useNavigate()
    const isAuthenticated = useAuthStore(s => s.isAuthenticated);
    const { theme, setTheme } = useTheme();

    const handleNavAuthButtons = async (intent: NavIntent) => {
        switch (intent) {
            case "login":
                navigate({ to: "/login" });
                break;
            case "logout":
                await logout()
                navigate({ to: "/" });
                break;
            case "signup":
                navigate({ to: "/signup" });
                break;
        }
    }
    return (
        <nav className={styles.navbar}>
            {/*logo*/}
            <section>
                <p>Placeholder name</p>
            </section>

            {/*middle section*/}
            <section></section>

            {/*login/profile buttons*/}
            <section className={styles.endContent}>
                <div className={styles.theme__Button}>
                    <Moon
                        color={`${theme === 'dark' ? "var(--color-accent)" : "var(--color-text-secondary)"}`}
                        size={24}
                        strokeWidth={1}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setTheme('dark')} />
                    <Sun
                        color={`${theme === 'white' ? "var(--color-accent)" : "var(--color-text-secondary)"}`}
                        size={24}
                        strokeWidth={1}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setTheme('white')} />
                </div>
                <section>
                    {isAuthenticated ?
                        <Button size="sm" variant="primary" type="button" onClick={() => handleNavAuthButtons("logout")}>
                            Log out
                        </Button> :
                        <>
                            <Button size="sm" variant="primary" type="button" onClick={() => handleNavAuthButtons("login")}>
                                Log in
                            </Button>

                            <Button size="sm" variant="primary" type="button" onClick={() => handleNavAuthButtons("signup")}>
                                Sign up
                            </Button>
                        </>}
                </section>
            </section>
        </nav>
    )
}
