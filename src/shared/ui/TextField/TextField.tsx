import type { LucideIcon } from "lucide-react";
import type React from "react";
import { forwardRef } from "react";
import Typography from "../Typography/Typography";
import styles from './TextField.module.css';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error: boolean
    helperText?: string
    LeftIcon?: LucideIcon
    RightIcon?: LucideIcon
    className?: string
    style?: React.CSSProperties
}


export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ id, label, error = false, helperText, LeftIcon, RightIcon, className, ...props }, ref) => {

    return (
        <section className={styles.textArea}>
            {label && <label htmlFor="email">{label}</label>}

            <div className={`${styles.inputContainer} ${error ? styles.error : ""}`}>

                {LeftIcon && <LeftIcon className={styles.iconLeft} />}

                <input
                    ref={ref}
                    className={styles.input}
                    id="ad"
                    type="string"
                    placeholder="some placeholder"
                    aria-describedby="error"
                    aria-invalid="false"
                    {...props}
                />

                {RightIcon && <RightIcon className={styles.iconRight} />}
            </div>

            {error && <Typography className={error ? styles.helperError : ""} as="p" weight="light" size="text-xs">{helperText}</Typography>}
        </section>
    )
})


// TODO: Refine icon alignment and spacing inside input container
