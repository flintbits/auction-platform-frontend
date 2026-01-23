import { LOGIN_CONFIG } from '../../shared/constants/AuthConfig';
import Input from '../../shared/ui/Input/Input';
import styles from './login.module.css';

export default function LoginPage() {

    return (
        <div className={styles.login}>
            <section className={styles.login__card}>
                {/*Image Section*/}
                <section className={styles.login__image}>
                    <img src='./authPage.jpg' alt="Background Image" />
                </section>

                {/*LogIn Form*/}
                <section className={styles.login__form}>
                    <h2 style={{ marginBottom: "var(--space-sm)", fontWeight: "var(--font-weight-thin)" }}>Log in</h2>
                    <form className={styles.form}>
                        {LOGIN_CONFIG.map((field) => (
                            <Input
                                id={field.id}
                                label={field.label}
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                required={field.required}
                                error=''
                            />
                        ))}
                        <div className={styles.fieldInline}>
                            <input type="checkbox" id="autoBid" />
                            <label htmlFor="autoBid">Enable auto-bid</label>
                        </div>

                        <button type="submit" className={styles.button}>
                            Submit
                        </button>
                    </form>
                </section>
            </section>
        </div >
    )
}
