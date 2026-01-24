import { Link } from "@tanstack/react-router"
import Button from "../../shared/ui/button/Button"
import styles from "./Navbar.module.css"

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            {/*logo*/}
            <section></section>

            {/*middle section*/}
            <section></section>

            {/*login/profile buttons*/}
            <section className={styles.endContent}>
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
        </nav>
    )
}
