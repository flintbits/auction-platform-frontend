import type React from "react";
import { forwardRef } from "react";
import styles from "./Button.module.css";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    block?: boolean;
    className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            size = "md",
            variant = "primary",
            block = false,
            className = "",
            disabled = false,
            ...props
        },
        ref
    ) => {
        const classes = [
            styles.btn,
            styles[size],
            styles[variant],
            block ? styles.block : "",
            disabled ? styles.disabled : "",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <button
                ref={ref}
                className={classes}
                disabled={disabled}
                {...props}
            >
                {children}
            </button>
        );
    }
);
