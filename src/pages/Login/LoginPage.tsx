import { Link } from '@tanstack/react-router';
import { LOGIN_CONFIG } from '../../shared/constants/AuthConfig';
import Input from '../../shared/ui/Input/Input';
import styles from './login.module.css';
import Button from '../../shared/ui/button/Button';



export default function LoginPage() {

    return (
        <div className={styles.login}>
            <section className={styles.login__card}>
                {/*Image Section*/}
                <section className={styles.login__image}>
                    <img src='https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg' alt="Background Image" />
                </section>

                {/*LogIn Form*/}
                <section className={styles.login__form}>
                    <div style={{ marginBottom: "var(--space-sm)" }}>
                        <h1 style={{ fontWeight: "var(--font-weight-thin)", fontSize: "var( --font-size-2xl)" }}>Log in</h1>
                        <p>
                            Dont have account? <Link to={"/signup"} className={styles.route__button}>Sign up</Link >
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

                        <Button variant="primary" type='submit'>
                            Submit
                        </Button>
                    </form>
                    <p style={{ marginTop: 8 }}>Return to  <Link to="/" className={styles.route__button}>Home</Link></p>
                </section>
            </section>
        </div >
    )
}
