import styles from '../styles/AuthLayout.module.css';
import LoginForm from "./LoginForm";

type Props = {}

export default function AuthLayout({ }: Props) {
  return (
    <section className={styles.auth}>
      <section className={styles.authContainer}>
        <LoginForm />
      </section>
    </section>
  )
}
