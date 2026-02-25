import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { SIGNUP_CONFIG } from '../../shared/constants/AuthConfig';
import Button from '../../shared/ui/Button/Button';
import Input from '../../shared/ui/Input/Input';
import styles from './signup.module.css';


type UserRole = "organizer" | "team_admin";

export default function SignupPage() {
    const [role, setRole] = useState<UserRole | null>(null)

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
                        <h1 style={{ fontWeight: "var(--font-weight-thin)", fontSize: "var( --font-size-2xl)" }}>Create an account</h1>
                        <p>
                            Already have an account? <Link to={"/login"} className={styles.route__button}>Log in</Link >
                        </p>
                    </div>
                    <form className={styles.form}>

                        <label style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>
                            Sign up as <span aria-hidden="true">*</span>
                        </label>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                            <div >
                                <Button
                                    type="button"
                                    variant={role === "organizer" ? "primary" : "outline"}
                                    size="sm"
                                    block
                                    onClick={() => setRole("organizer")}
                                >
                                    Organizer
                                </Button>
                            </div>

                            <div>
                                <Button
                                    type="button"
                                    size="sm"
                                    variant={role === "team_admin" ? "primary" : "outline"}
                                    block
                                    onClick={() => setRole("team_admin")}
                                >
                                    Team admin
                                </Button>
                            </div>
                        </div>



                        {SIGNUP_CONFIG.map((field) => (
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

                        <Button variant="primary" type='submit'>
                            Sign up
                        </Button>
                    </form>
                    <p style={{ marginTop: 8 }}>Return to  <Link to="/" className={styles.route__button}>Home</Link></p>
                </section>
            </section>
        </div >
    )
}
