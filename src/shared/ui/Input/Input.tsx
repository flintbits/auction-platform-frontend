import type { InputProps } from './input,types'
import styles from './Input.module.css'

export default function Input({ label, id, name, type = "text", placeholder, value, onChange, required, error }: InputProps) {
    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.label}>
                {label}
                {required && <span style={{ marginLeft: 4, color: "var(--color-danger)" }}>*</span>}
            </label>
            <input
                id={id}
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={styles.inputError}
            />
            {error &&
                <p id={`${id}-error`} className={styles.errorText}>{error}</p>
            }
        </div>
    )
}
