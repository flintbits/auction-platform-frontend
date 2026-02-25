import { Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { login } from '../../shared/api/auth.service';
import { LOGIN_CONFIG } from '../../shared/constants/AuthConfig';
import Button from '../../shared/ui/Button/Button';
import Input from '../../shared/ui/Input/Input';
import styles from './login.module.css';

type loginData = {
    email: string;
    password: string;
}


export default function LoginPage() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState<loginData>({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function hadleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLoginData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const user = await login(loginData.email, loginData.password);
            if (user.is_onboarded) {
                navigate({ to: "/dashboard" })
            } else {
                navigate({ to: '/onboarding' })
            }
        } catch (err: any) {
            setError(err.message || "Login Failed");
        } finally {
            setLoading(false)
        }
    }

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
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {LOGIN_CONFIG.map((field) => (
                            <Input
                                id={field.id}
                                label={field.label}
                                name={field.name}
                                type={field.type}
                                value={loginData[field.name as keyof typeof loginData]}
                                onChange={hadleChange}
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
