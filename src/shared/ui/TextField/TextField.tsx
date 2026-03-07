import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import type React from "react";
import { forwardRef } from "react";
import Typography from "../Typography/Typography";
import styles from './TextField.module.css';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    isPassword?: boolean
    error?: boolean
    helperText?: string
    LeftIcon?: LucideIcon
    RightIcon?: LucideIcon
    className?: string
    style?: React.CSSProperties
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ id, label, isPassword, error = false, helperText, LeftIcon, RightIcon, style, className, ...props }, ref) => {

    return (
        <section className={styles.textArea} style={style}>
            {label &&
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <label htmlFor="email">{label}</label>
                    {isPassword &&
                        <Typography as="p" weight="light" size="text-xs">
                            <Link to="/" style={{ textDecoration: "none", color: "var(--color-accent)" }}>Forgot Password?</Link>
                        </Typography>
                    }
                </div>
            }

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

            <Typography
                as="p"
                className={error ? styles.helperError : ""}
                style={{ visibility: error ? "visible" : "hidden", minHeight: 18 }}
                weight="light"
                size="text-xs"
            >{helperText}</Typography>
        </section >
    )
})


// TODO: Refine icon alignment and spacing inside input container
