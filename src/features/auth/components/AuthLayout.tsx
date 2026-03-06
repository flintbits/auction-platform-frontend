import styles from '../styles/AuthLayout.module.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

type AuthLayoutProps = {
  type: string
}

export default function AuthLayout({ type }: AuthLayoutProps) {
  return (
    <section className={styles.auth}>
      <section className={styles.authContainer}>
        {type === "login" && <LoginForm />}
        {type === "signup" && <SignupForm />}
      </section>
    </section>
  )
}
