import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../app/context/ThemeProvider";
import Button from "../../shared/ui/button/Button";
import styles from "./Navbar.module.css";

export default function NavBar() {
    const { theme, setTheme } = useTheme();
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
                    <Link to="/login">
                        <Button size="sm" variant="primary" type="button">
                            Log in
                        </Button>
                    </Link>

                    <Link to="/signup">
                        <Button size="sm" variant="primary" type="button">
                            Sign up
                        </Button>
                    </Link>
                </section>
            </section>
        </nav>
    )
}
