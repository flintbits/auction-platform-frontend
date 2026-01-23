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
                    <div style={{ marginBottom: "var(--space-sm)" }}>
                        <h1 style={{ fontWeight: "var(--font-weight-thin)", fontSize: "var( --font-size-2xl)" }}>Log in</h1>
                        <p style={{ fontWeight: "var(--font-weight-thin)", fontSize: "var( --font-size-xs)" }}>
                            Dont have account? <span role="button" className={styles.signup__button}>Sign up</span>
                        </p>
                    </div>
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
                            <label htmlFor="autoBid">Remember me</label>
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
